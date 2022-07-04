<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Service\AdminMenu\Item;
use Miaoxing\Plugin\BaseService;

/**
 * 后台菜单
 *
 * @mixin \EventMixin
 */
class AdminMenu extends BaseService
{
    /**
     * @var Item
     */
    protected $menu;

    /**
     * @param array $options
     */
    public function __construct(array $options = [])
    {
        parent::__construct($options);

        $this->menu = Item::new();
    }

    /**
     * @param string|Item|null $name
     * @return Item
     */
    public function addChild($name = null): Item
    {
        return $this->menu->addChild($name);
    }

    /**
     * @param string $name
     * @return Item|null
     */
    public function getChild(string $name): ?Item
    {
        return $this->menu->getChild($name);
    }

    /**
     * Get or add child by the key
     *
     * @param string $name
     * @return Item
     */
    public function child(string $name): Item
    {
        return $this->menu->child($name);
    }

    /**
     * Remove child by the name
     *
     * @param string $name
     * @return Item
     */
    public function removeChild(string $name): Item
    {
        return $this->menu->removeChild($name);
    }

    /**
     * Return the root menu object
     *
     * @return Item
     * @svc
     */
    protected function getMenu(): Item
    {
        return $this->menu;
    }

    /**
     * @return array
     * @svc
     */
    protected function getMenus(): array
    {
        if (!$this->menu->hasChildren()) {
            $this->event->trigger('adminMenuGetMenus', $this);
        }
        return $this->menu->toArray()['children'];
    }
}
