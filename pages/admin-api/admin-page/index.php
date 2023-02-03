<?php

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\BaseController;

return new class () extends BaseController {
    public function get()
    {
        return suc([
            'data' => [
                'menus' => AdminMenu::getMenus(),
                'title' => '喵星商城',
            ],
        ]);
    }
};
