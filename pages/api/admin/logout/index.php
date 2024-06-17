<?php

use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\User;

return new class () extends BasePage {
    protected $className = '用户';

    protected $methodNames = [
        'post' => '退出',
    ];

    public function init()
    {
        parent::init();
        $this->removeMiddleware(CheckPagePermission::class);
    }

    public function post()
    {
        return User::logout();
    }
};
