<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;

class UserController extends BaseController
{
    protected $controllerAuth = false;

    public function loginAction($req)
    {
        return $this->curUser->login($req);
    }
}
