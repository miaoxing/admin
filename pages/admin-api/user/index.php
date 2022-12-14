<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;
use Wei\V;

return new class () extends BaseController {
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
