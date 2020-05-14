<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Rest\IndexTrait;
use Miaoxing\Services\Rest\NewCreateTrait;
use Miaoxing\Services\Service\Request;
use Miaoxing\Services\Service\V;

class AdminsController extends BaseController
{
    use IndexTrait;
    use NewCreateTrait;

    protected $controllerName = '管理员管理';

    protected $actionPermissions = [
        'index,indexGroups' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'enable' => '启用/禁用',
    ];
    /**
     * @var GroupModel|GroupModel[]|array
     */
    protected $groups;

    protected function createModel()
    {
        return UserModel::where('isAdmin', true)
            ->reqQuery();
    }

    protected function afterIndexFind(Request $req, UserModel $users)
    {
        // NOTE: UserModel 里还没有 group 关联，需手动读取
        $groupIds = array_unique(array_filter($users->getAll('groupId')));
        $this->groups = $groupIds ? GroupModel::findAll($groupIds)->indexBy('id') : [];
    }

    protected function buildIndexData(UserModel $user)
    {
        return [
            'group' => $this->groups[$user->groupId] ?? null,
        ];
    }

    public function indexGroupsAction()
    {
        return GroupModel::all()->withUnGroup()->toRet();
    }

    public function editAction()
    {
        $user = UserModel::findOrInit(req('id'));

        return $user->toRet();
    }

    public function editGroupsAction()
    {
        return $this->indexGroupsAction();
    }

    public function updateAction()
    {
        // 添加用户时才校验用户名
        $validateUsername = req('action') === 'create';

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = req('action') === 'create' || req('password');

        $ret = V::key('username', '用户名')
            ->required($validateUsername)
            ->when($validateUsername, function (V $v) {
                $v->length(1, 21)
                    ->alnum()
                    ->notRecordExists('users', 'username');
            })
            ->key('password', '密码')->required($validatePassword)->minLength(6)
            ->key('passwordAgain', '重复密码')->required($validatePassword)->equalTo(req('password'))->message('equalTo',
                '两次输入的密码不相等')
            ->key('nickName', ' 昵称')->required(false)->length(1, 32)
            ->check(req());
        $this->tie($ret);

        // 添加用户时,创建新的用户对象,创建用户时,根据编号获取用户对象
        if ('create' === req('action')) {
            $user = UserModel::new();
        } else {
            $user = UserModel::findOrFail(req('id'));
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user->username = req('username');
        }

        if ($validatePassword) {
            $user->setPlainPassword(req('password'));
        }

        // 保存用户额外的信息
        $user->save([
            'isAdmin' => true,
            'name' => (string) req('name'),
            'nickName' => (string) req('nickName'),
            'groupId' => req('groupId'),
        ]);

        return $user->toRet();
    }

    public function enableAction()
    {
        $user = UserModel::findOrFail(req('id'));
        $user->isEnabled = req('isEnabled');
        $user->save();

        return $this->suc();
    }
}
