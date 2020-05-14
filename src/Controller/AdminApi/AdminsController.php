<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Service\V;

class AdminsController extends BaseController
{
    protected $controllerName = '管理员管理';

    protected $actionPermissions = [
        'index,indexGroups' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'enable' => '启用/禁用',
    ];

    public function indexAction()
    {
        $users = UserModel::where('is_admin', true)
            ->reqQuery()
            ->all();

        // NOTE: UserModel 里还没有 group 关联，需手动读取
        $groupIds = array_unique(array_filter($users->getAll('groupId')));
        $groups = $groupIds ? GroupModel::findAll($groupIds)->indexBy('id') : [];

        $data = [];
        foreach ($users as $user) {
            $data[] = $user->toArray() + ['group' => $groups[$user->groupId] ?? null];
        }

        return $users->toRet(['data' => $data]);
    }

    public function indexGroupsAction()
    {
        return GroupModel::all()->withUnGroup()->toRet();
    }

    public function newAction($req)
    {
        return $this->editAction($req);
    }

    public function editAction($req)
    {
        $user = UserModel::findOrInit($req['id']);

        return $user->toRet();
    }

    public function editGroupsAction()
    {
        return $this->indexGroupsAction();
    }

    public function createAction($req)
    {
        return $this->updateAction($req);
    }

    public function updateAction($req)
    {
        // 添加用户时才校验用户名
        $validateUsername = $req['action'] === 'create';

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = $req['action'] === 'create' || $req['password'];

        $ret = V::key('username', '用户名')
            ->required($validateUsername)
            ->when($validateUsername, function (V $v) {
                $v->length(1, 21)
                    ->alnum()
                    ->notRecordExists('users', 'username');
            })
            ->key('password', '密码')->required($validatePassword)->minLength(6)
            ->key('passwordAgain', '重复密码')->required($validatePassword)->equalTo($req['password'])->message('equalTo', '两次输入的密码不相等')
            ->key('nickName',' 昵称')->required(false)->length(1, 32)
            ->check($req);
        $this->tie($ret);

        // 添加用户时,创建新的用户对象,创建用户时,根据编号获取用户对象
        if ('create' === $req['action']) {
            $user = UserModel::new();
        } else {
            $user = UserModel::findOrFail($req['id']);
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user['username'] = $req['username'];
        }

        if ($validatePassword) {
            $user->setPlainPassword($req['password']);
        }

        // 保存用户额外的信息
        $user->save([
            'isAdmin' => true,
            'name' => (string) $req['name'],
            'nickName' => (string) $req['nickName'],
            'groupId' => $req['groupId'],
        ]);

        return $user->toRet();
    }

    public function enableAction($req)
    {
        $user = UserModel::findOrFail($req['id']);
        $user->save(['enable' => $req['enable']]);

        return $this->suc();
    }
}
