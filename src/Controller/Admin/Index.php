<?php

namespace Miaoxing\Admin\Controller\Admin;

class Index extends \miaoxing\plugin\BaseController
{
    protected $controllerName = '后台首页';

    protected $actionPermissions = [
        'index' => '首页'
    ];

    /**
     * 后台首页
     */
    public function indexAction($req)
    {
        header("Location:" . wei()->url->full('admin/article'));
    }
}
