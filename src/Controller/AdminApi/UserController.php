<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

class UserController extends BaseController
{
    protected $controllerAuth = false;

    public function loginAction($req)
    {
        return User::login($req);
    }
}
