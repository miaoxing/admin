<?php

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BasePage;

return new class () extends BasePage {
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
