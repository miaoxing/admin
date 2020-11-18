<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Service\DestroyAction;
use Miaoxing\Services\Service\ShowAction;
use Miaoxing\Plugin\Service\UserModel;
use Wei\Req;
use Wei\V;

return new class extends BaseController {
    public function createModel()
    {
        return UserModel::new()->where('isAdmin', true);
    }

    public function get()
    {
        return ShowAction::exec($this);
    }

    public function patch(Req $req)
    {
        $user = UserModel::findFromReq();

        // 添加用户时才校验用户名
        $validateUsername = $user->isNew();

        // 添加用户,编辑用户时,提交了密码,才检验密码是否合法
        $validatePassword = $user->isNew() || $req['password'];

        $ret = V
            ::key('username', '用户名')->required($validateUsername)->when($validateUsername, function (V $v) {
                $v->length(1, 32)
                    ->alnum()
                    ->notRecordExists('users', 'username');
            })
            ->key('password', '密码')->required($validatePassword)->minLength(6)
            ->key('passwordAgain', '重复密码')->required($validatePassword)->equalTo($req['password'])->message(
                'equalTo',
                '两次输入的密码不相等'
            )
            ->char('nickName', ' 昵称')->maxCharLength(32)
            ->check($req);
        $this->tie($ret);

        if (isset($req['isEnabled']) && !$req['isEnabled'] && $user->isSuperAdmin()) {
            return err('不能禁用超级管理员');
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user->username = req('username');
        }

        if ($validatePassword) {
            $user->setPlainPassword(req('password'));
        }

        $user->isAdmin = true;
        $user->save($req);

        return $user->toRet();
    }

    public function delete()
    {
        return DestroyAction::exec($this);
    }
};
