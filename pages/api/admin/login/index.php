<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\Config;
use Miaoxing\Plugin\Service\User;

return new class extends BasePage {
    protected $requireAuth = false;

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
