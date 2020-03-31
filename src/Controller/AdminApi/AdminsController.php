<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\User\Service\GroupModel;

/**
 * @todo 迁移到user插件中
 */
class AdminsController extends \Miaoxing\Plugin\BaseController
{
    protected $controllerName = '管理员管理';

    protected $actionPermissions = [
        'index,groups' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'enable' => '启用/禁用',
    ];

    /**
     * 展示用户列表
     */
    public function indexAction($req)
    {
        $users = wei()->userModel();

        $users->where('admin', true);

        // 分页
        $users->limit($req['rows'])->page($req['page']);

        // 排序
        $users->desc('id');

        if (wei()->isPresent($req['groupId'])) {
            $users->where(['groupId' => $req['groupId']]);
        }

        if ($req['username']) {
            $users->whereContains('username', $req['username']);
        }

        if ($req['name']) {
            $users->whereContains('name', $req['name']);
        }

        if ($req['nickName']) {
            $users->whereContains('nickName', $req['nickName']);
        }

        if ($req['email']) {
            $users->whereContains('email', $req['email']);
        }

        $users = $users->all();

        $data = [];
        foreach ($users as $user) {
            $data[] = $user->toArray() + [
                    'group' => $user->group,
                ];
        }

        return $users->toRet(['data' => $data]);
    }

    public function groupsAction()
    {
        $groups = GroupModel::desc('id')->all();
        $groups->withUngroup();
        return $this->suc(['data' => $groups]);
    }

    public function newAction($req)
    {
        return $this->editAction($req);
    }

    public function editAction($req)
    {
        $user = wei()->user()->findOrInitById($req['id']);

        // TODO 实现toArray hidden
        $userData = $user->toArray();
        unset($userData['password']);
        unset($userData['salt']);

        $groups = wei()->group()->notDeleted()->desc('id')->findAll();
        $groups->withUngroup();

        $ret = [
            'user' => $userData,
            'groups' => $groups,
        ];

        wei()->event->trigger('beforeAdminAdminsEdit', [&$ret, $user]);

        return $this->suc($ret);
    }

    public function editSelfAction()
    {
        $user = wei()->user()->findOrInitById(wei()->curUser['id']);

        return get_defined_vars();
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

        // 校验表单数据是否合法
        $validator = wei()->validate([
            'data' => $req,
            'rules' => [
                'username' => $validateUsername ? [
                    'length' => [1, 32],
                    'alnum' => true,
                    'notRecordExists' => ['user', 'username'],
                ] : [],
                'password' => [
                    'required' => $validatePassword,
                    'minLength' => 6,
                ],
                'passwordAgain' => [
                    'required' => $validatePassword,
                    'equalTo' => $req['password'],
                ],
                'groupId' => [
                    'required' => false,
                ],
                'headImg' => [
                    'required' => false,
                ],
                'nickName' => [
                    'required' => false,
                    'length' => [1, 32],
                ],
            ],
            'names' => [
                'username' => '用户名',
                'password' => '密码',
                'passwordAgain' => '重复密码',
                'groupId' => '用户组',
                'headImg' => '头像',
                'nickName' => '昵称',
            ],
            'messages' => [
                'passwordAgain' => [
                    'equalTo' => '两次输入的密码不相等',
                ],
            ],
        ]);

        if (!$validator->isValid()) {
            return $this->err($validator->getFirstMessage());
        }

        // 添加用户时,创建新的用户对象,创建用户时,根据编号获取用户对象
        if ('create' == $req['action']) {
            $user = wei()->user();
        } else {
            $user = wei()->user()->findOneById($req['id']);
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user['username'] = $req['username'];
        }

        if ($validatePassword) {
            $user->setPlainPassword($req['password']);
        }

        if (isset($req['headImg'])) {
            $user['headImg'] = $req['headImg'];
        }

        wei()->event->trigger('beforeAdminAdminsSave', [$user, $req]);

        // 保存用户额外的信息
        $user->save([
            'admin' => true,
            'name' => (string) $req['name'],
            'nickName' => (string) $req['nickName'],
            'groupId' => (int) $req['groupId'],
        ]);

        wei()->event->trigger('afterAdminAdminsSave', [$user, $req]);

        return $this->suc([
            'message' => '操作成功',
            'id' => $user['id'],
        ]);
    }

    public function enableAction($req)
    {
        $user = wei()->user()->findOneById($req['id']);
        $user->save(['enable' => $req['enable']]);

        return $this->suc();
    }
}
