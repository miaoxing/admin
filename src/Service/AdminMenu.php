<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Service\AdminMenu\Item;
use Miaoxing\App\Service\Permission;
use Miaoxing\App\Service\UserModel;
use Miaoxing\Plugin\BaseService;
use Miaoxing\Plugin\Service\User;

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
        $this->loadMenu();
        return $this->menu->toArray()['children'];
    }

    /**
     * @param UserModel|null $user
     * @return mixed
     * @svc
     */
    protected function getMenusByUser(UserModel $user = null)
    {
        $this->loadMenu();

        $user || $user = User::cur();
        if (!$user->isSuperAdmin() && Permission::isEnabledCheck()) {
            $permissions = $user->getActionPermissionCodes();
            $this->filterMenu($this->menu, $permissions);
        }

        return $this->menu->toArray()['children'];
    }

    protected function loadMenu()
    {
        if (!$this->menu->hasChildren()) {
            $this->event->trigger('adminMenuGetMenus', $this);
        }
    }

    /**
     * @param Item $menu
     * @param array $permissions
     * @return Item
     * @internal
     */
    protected function filterMenu(Item $menu, array $permissions): Item
    {
        foreach ($menu->getChildren() as $i => $subMenu) {
            if (false === $subMenu->getExtra('permission')) {
                continue;
            }

            if ($subMenu->getUrl() && !in_array($subMenu->getUrl(), $permissions, true)) {
                $menu->removeChild($i);
            }
            $this->filterMenu($subMenu, $permissions);
        }
        return $menu;
    }
}
