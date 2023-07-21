<?php

use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\User;
use Wei\V;

return new class () extends BasePage {
    protected $className = '个人资料';

    public function init()
    {
        parent::init();
        $this->removeMiddleware(CheckPagePermission::class);
    }

    public function get()
    {
        return User::cur()->toRet();
    }

    public function patch($req)
    {
        $user = User::cur();

        $v = V::defaultOptional();
        $v->setModel($user);
        $v->modelColumn('name', '姓名');
        $v->modelColumn('nickName', '昵称');
        $v->imageUrl('avatar', '头像')->allowEmpty();
        $data = $v->assert($req);

        User::cur()->save($data);

        return suc();
    }
};
