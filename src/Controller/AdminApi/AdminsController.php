<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Rest\FormTrait;
use Miaoxing\Services\Rest\IndexTrait;
use Miaoxing\Services\Service\Request;
use Miaoxing\Services\Service\V;

class AdminsController extends BaseController
{
    use IndexTrait;
    use FormTrait;

    protected $controllerName = '管理员管理';

    protected $actionPermissions = [
        'index,indexConfig' => '列表',
        'new,formConfig,create' => '添加',
        'edit,formConfig,update' => '编辑',
        'enable' => '启用/禁用',
    ];

    /**
     * @var GroupModel|GroupModel[]|array
     */
    protected $groups;

    public function createModel()
    {
        return UserModel::new();
    }

    protected function beforeIndexFind(Request $req, UserModel $models)
    {
        $models->where('isAdmin', true)
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

    public function indexConfigAction()
    {
        return GroupModel::all()->withUnGroup()->toRet();
    }

    public function formConfigAction()
    {
        return $this->indexConfigAction();
    }

    public function updateAction()
    {
        $user = UserModel::findFromRequest();

        // 添加用户时才校验用户名
        $validateUsername = $user->isNew();

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = $user->isNew() || req('password');

        $ret = V::key('username', '用户名')
            ->required($validateUsername)
            ->when($validateUsername, function (V $v) {
                $v->length(1, 32)
                    ->alnum()
                    ->notRecordExists('users', 'username');
            })
            ->key('password', '密码')->required($validatePassword)->minLength(6)
            ->key('passwordAgain', '重复密码')->required($validatePassword)->equalTo(req('password'))->message('equalTo',
                '两次输入的密码不相等')
            ->key('nickName', ' 昵称')->required(false)->length(1, 32)
            ->check(req());
        $this->tie($ret);

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
