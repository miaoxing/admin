<?php

use Miaoxing\Admin\Service\AdminModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\ItemTrait;
use Wei\Req;
use Wei\V;

return new class extends BaseController {
    use ItemTrait;

    protected $include = [
        'user',
    ];

    public function patch(Req $req)
    {
        $data = (array) $req['user'];
        $admin = AdminModel::findFromReq();
        $user = $admin->user()->findOrInitBy();

        // 添加用户时才校验用户名
        $validateUsername = $user->isNew();

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = $user->isNew() || ($data['password'] ?? false);

        $ret = V
            ::key('username', '用户名')->required($validateUsername)->when($validateUsername, function (V $v) {
                $v->length(1, 32)
                    ->alnum()
                    ->notRecordExists('users', 'username');
            })
            ->key('password', '密码')->required($validatePassword)->minLength(6)
            ->key('passwordAgain', '重复密码')->required($validatePassword)->equalTo($data['password'] ?? null)->message(
                'equalTo',
                '两次输入的密码不相等'
            )
            ->char('nickName', ' 昵称')->optional()->maxCharLength(32)
            ->check($data);
        $this->tie($ret);

        if (isset($data['isEnabled']) && !$data['isEnabled'] && $user->isSuperAdmin()) {
            return err('不能禁用超级管理员');
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user->username = $data['username'];
        }

        if ($validatePassword) {
            $user->setPlainPassword($data['password']);
        }

        $user->isAdmin = true;
        $user->save($data);
        $admin->save(['userId' => $user->id]);

        return $admin->toRet();
    }
};
