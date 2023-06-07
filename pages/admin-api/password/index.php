<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

return new class () extends BaseController {
    protected $controllerName = '密码管理';

    protected $actionPermissions = [
        'index,update' => '修改密码',
    ];

    protected $className = '密码';

    protected $methodNames = [
        'put' => '修改',
    ];

    public function put($req)
    {
        return User::cur()->updatePassword($req);
    }
};
