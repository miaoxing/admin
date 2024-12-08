<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\Config;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Services\Middleware\RateLimit;

return new class extends BasePage {
    protected $requireAuth = false;

    protected $className = '用户';

    protected $methodNames = [
        'post' => '登录',
    ];

    public function init()
    {
        parent::init();
        $this->middleware(RateLimit::class, [
            'timeWindow' => RateLimit::DAY,
            'max' => 5,
            'incrOnErr' => true,
            'only' => ['post'],
        ]);
    }

    public function get()
    {
        $config = Config::getGlobalSection('adminLogin');

        return suc([
            'data' => $config,
        ]);
    }

    public function post($req)
    {
        return User::login($req);
    }
};
