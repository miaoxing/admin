<?php

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BaseController;

return new class () extends BaseController {
    public function init()
    {
        parent::init();
        $this->removeMiddleware(CheckPagePermission::class);
    }

    public function get()
    {
        return suc([
            'data' => [
                'menus' => AdminMenu::getMenusByUser(),
                'title' => '喵星商城',
            ],
        ]);
    }
};
