<?php

namespace MiaoxingTest\Admin\Service;

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\Test\BaseTestCase;

class AdminMenuTest extends BaseTestCase
{
    public function testRemoveChild()
    {
        $adminMenu = AdminMenu::instance();

        $adminMenu->addChild('test');

        $menu = $adminMenu->getMenu();
        $this->assertNotNull($menu->getChild('test'));

        $adminMenu->removeChild('test');
        $this->assertNull($menu->getChild('test'));
    }
}
