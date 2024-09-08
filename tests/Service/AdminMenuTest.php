<?php

namespace MiaoxingTest\Admin\Service;

use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\Test\BaseTestCase;

class AdminMenuTest extends BaseTestCase
{
    protected function tearDown(): void
    {
        $this->wei->remove('adminMenu');

        parent::tearDown();
    }

    public function testRemoveChild()
    {
        $adminMenu = AdminMenu::instance();

        $adminMenu->addChild('test');

        $menu = $adminMenu->getMenu();
        $this->assertNotNull($menu->getChild('test'));

        $adminMenu->removeChild('test');
        $this->assertNull($menu->getChild('test'));
    }

    public function testRemoveChildByUrl()
    {
        $menu = AdminMenu::instance()->getMenu();

        $menu->addChild()->setUrl('url1');
        $menu->addChild()->setUrl('url2');
        $this->assertCount(2, $menu->children);

        $menu->removeChildByUrl('url2');
        $this->assertCount(1, $menu->children);
    }

    public function testAutoGenerateKey()
    {
        $adminMenu = AdminMenu::instance();
        $child = $adminMenu->addChild();
        $child2 = $adminMenu->addChild();

        $this->assertSame('0', $child->getCode());
        $this->assertSame('1', $child2->getCode());
    }

    public function testAddAndRemoveChild()
    {
        $menu = AdminMenu::instance()->getMenu();
        $menu->addChild();
        $menu->addChild();
        $this->assertCount(2, $menu->children);

        $menu->removeChild(0);
        $this->assertCount(1, $menu->children);
        $menu->addChild();
        $this->assertCount(2, $menu->children);
    }

    public function testMixStringAndIntKey()
    {
        $menu = AdminMenu::instance()->getMenu();
        $menu->addChild('test');
        $menu->addChild();
        $this->assertCount(2, $menu->children);

        $menu->removeChild(0);
        $this->assertCount(1, $menu->children);
    }
}
