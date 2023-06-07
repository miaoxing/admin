<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

return new class () extends BaseController {
    protected $className = '用户';

    protected $methodNames = [
        'post' => '退出',
    ];

    public function post()
    {
        return User::logout();
    }
};
