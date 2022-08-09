<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;
use Wei\V;

return new class () extends BaseController {
    public function get()
    {
        return User::cur()->toRet();
    }

    public function put($req)
    {
        $v = V::new();
        $v->string('name', '姓名')->maxCharLength(32);
        $v->string('nickName', '昵称')->maxCharLength(32);
        $v->tinyChar('avatar', '头像');
        $data = $v->assert($req);

        User::cur()->save($data);

        return suc();
    }
};
