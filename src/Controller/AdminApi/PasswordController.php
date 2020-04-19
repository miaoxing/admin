<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

class PasswordController extends BaseController
{
    protected $controllerName = '密码管理';

    protected $actionPermissions = [
        'update' => '修改密码',
    ];

    public function updateAction($req)
    {
        return User::cur()->updatePassword($req);
    }
}
