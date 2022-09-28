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
        $v = V::defaultOptional();
        $v->maxCharLength('name', '姓名', 32);
        $v->maxCharLength('nickName', '昵称', 32);
        $v->tinyChar('avatar', '头像');
        $data = $v->assert($req);

        User::cur()->save($data);

        return suc();
    }
};
