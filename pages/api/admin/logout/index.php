<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\User;

return new class () extends BasePage {
    protected $className = '用户';

    protected $methodNames = [
        'post' => '退出',
    ];

    public function post()
    {
        return User::logout();
    }
};
