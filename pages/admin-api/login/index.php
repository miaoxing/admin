<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\Config;
use Miaoxing\Plugin\Service\User;

return new class () extends BaseController {
    protected $controllerAuth = false;

    protected $className = '用户';

    protected $methodNames = [
        'post' => '登录',
    ];

    public function get()
    {
        $config = Config::getSection('adminLogin');

        return suc([
            'data' => $config,
        ]);
    }

    public function post($req)
    {
        return User::login($req);
    }
};
