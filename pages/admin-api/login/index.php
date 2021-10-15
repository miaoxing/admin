<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

return new class() extends BaseController {
    protected $controllerAuth = false;

    public function post($req)
    {
        return User::login($req);
    }
};
