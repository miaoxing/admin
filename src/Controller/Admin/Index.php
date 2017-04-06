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
        return $this->response->redirect($this->url('admin/article'));
    }
}
