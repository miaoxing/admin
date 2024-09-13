<?php

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\BasePage;

return new class extends BasePage {
    public function post()
    {
        AdminMenu::reset();

        return suc();
    }
};
