<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Service\AdminMenu\Item;
use Miaoxing\Plugin\BaseService;

/**
 * 后台菜单
 *
 * @mixin \EventMixin
 *
 * @method Item addChild(string|Item|null $name = null): Item
 * @method Item|null getChild(string $name)
 * @method Item child(string $name)
 * @method Item removeChild(string $name)
 * @method Item removeChildByUrl(string|array $url)
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
     * @param string $name
     * @param array $args
     * @return mixed
     * @throws \ReflectionException
     */
    public function __call(string $name, array $args)
    {
        if (method_exists($this->menu, $name)) {
            return $this->menu->{$name}(...$args);
        }
        return parent::__call($name, $args);
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
