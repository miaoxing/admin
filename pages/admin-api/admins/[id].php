<?php

use Miaoxing\Admin\Service\AdminModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Page\ItemTrait;
use Wei\Req;
use Wei\V;

return new class () extends BaseController {
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

        $v = V::new();
        $v->string('username', '用户名')->required($validateUsername)->when($validateUsername, function (V $v) {
            $v->length(3, 32)->alnum()->notRecordExists('users', 'username');
        });
        $v->string('password', '密码', 6, 50)->required($validatePassword);
        $v->string('passwordAgain', '重复密码', 6, 50)->required($validatePassword)
            ->equalTo($data['password'] ?? null)->message('equalTo', '两次输入的密码不相等');
        $v->maxCharLength('nickName', ' 昵称', 32)->optional();
        $ret = $v->check($data);
        $this->tie($ret);

        if (isset($data['isEnabled']) && !$data['isEnabled'] && $user->isSuperAdmin()) {
            return err('不能禁用超级管理员');
        }

        // 只有校验过才存储到用户对象中
        if ($validateUsername) {
            $user->username = $data['username'];
        }

        if ($this->shouldUpdatePassword($validatePassword, $user)) {
            $user->setPlainPassword($data['password']);
        }

        $user->isAdmin = true;
        $user->save($data);
        $admin->save(['userId' => $user->id]);

        return $admin->toRet();
    }

    protected function shouldUpdatePassword(bool $validatePassword, UserModel $user): bool
    {
        if ($user->isNew()) {
            // 新用户总是要更新密码
            return true;
        }

        if ($this->app->isDemo()) {
            // 演示模式下，编辑用户不更新密码
            return false;
        }

        // 提交了密码，需更新密码
        return $validatePassword;
    }
};
