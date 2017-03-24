<?php

namespace Miaoxing\Admin\Controller\Admin;

/**
 * @todo 迁移到user插件中
 */
class Admin extends \miaoxing\plugin\BaseController
{
    protected $controllerName = '管理员管理';

    protected $actionPermissions = [
        'index' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'enable' => '启用/禁用',
    ];

    /**
     * 展示用户列表
     */
    public function indexAction($req)
    {
        switch ($req['_format']) {
            case 'json':
                $users = wei()->user()->where(['admin' => true]);

                $users->andWhere("username != 'miaostar'");

                // 分页
                $users->limit($req['rows'])->page($req['page']);

                // 排序
                $users->desc('id');

                if ($req['name']) {
                    $users->andWhere('name like ?', ['%' . $req['name'] . '%']);
                }

                if ($req['nickName']) {
                    $users->andWhere('nickName like ?', ['%' . $req['nickName'] . '%']);
                }

                if ($req['email']) {
                    $users->andWhere('email like ?', ['%' . $req['email'] . '%']);
                }

                $users = $users->findAll();

                $data = [];
                foreach ($users as $user) {
                    $data[] = $user->toArray() + [
                            'group' => $user->getGroup()->toArray(),
                        ];
                }

                return $this->json('读取列表成功', 1, [
                    'data' => $data,
                    'page' => $req['page'],
                    'rows' => $req['rows'],
                    'records' => $users->count(),
                ]);

            default:
                return get_defined_vars();
        }
    }

    public function newAction($req)
    {
        return $this->editAction($req);
    }

    public function editAction($req)
    {
        $user = wei()->user()->findOrInitById($req['id']);

        return get_defined_vars();
    }

    public function createAction($req)
    {
        return $this->updateAction($req);
    }

    public function updateAction($req)
    {
        // 添加用户时才校验用户名
        $validateUsername = $req['action'] == 'create';

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = $req['action'] == 'create' || $req['password'];

        // 校验表单数据是否合法
        $validator = wei()->validate([
            'data' => $req,
            'rules' => [
                'groupId' => [
                    'recordExists' => ['groups'],
                ],
                'username' => [
                    'required' => $validateUsername,
                    'length' => [1, 32],
                    'alnum' => true,
                    'notRecordExists' => ['user', 'username'],
                ],
                'nickName' => [
                    'length' => [1, 32],
                ],
                'password' => [
                    'required' => $validatePassword,
                    'minLength' => 6,
                ],
                'passwordAgain' => [
                    'required' => $validatePassword,
                    'equalTo' => $req['password'],
                ],
            ],
            'names' => [
                'groupId' => '用户组',
                'username' => '用户名',
                'nickName' => '昵称',
                'password' => '密码',
                'passwordAgain' => '重复密码',
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
        if ($req['action'] == 'create') {
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

        // 检查app库是否存在相同的用户
        if ($validateUsername) {
            $isAppUserExists = wei()->appUser()->where(['username' => $req['username']])->find();
            if ($isAppUserExists) {
                return $this->err(sprintf('用户名"%s"已存在', $req['username']));
            }
        }

        // 存储用户到app库
        $appUser = wei()->appUser()->findOrInitById($user['appUserId']);
        $appUser->save([
            'username' => $user['username'],
            'salt' => $user['salt'],
            'password' => $user['password'],
            'nickName' => $req['nickName'],
        ]);

        wei()->event->trigger('beforeAdminEditSave', [$user, $req]);

        // 保存用户额外的信息
        $user->save([
            'admin' => true,
            'groupId' => $req['groupId'],
            'nickName' => $req['nickName'],
            'appUserId' => $appUser['id'],
        ]);

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
