<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\App\Service\Permission;
use Miaoxing\App\Service\UserModel;
use Miaoxing\Plugin\BaseService;
use Miaoxing\Plugin\Service\User;

/**
 * 后台菜单
 *
 * @mixin \EventMixin
 *
 * @method AdminMenuModel addChild(string|Item|null $name = null)
 * @method AdminMenuModel|null getChild(string $name)
 * @method AdminMenuModel child(string $name)
 * @method AdminMenuModel removeChild(string $name)
 * @method AdminMenuModel removeChildByUrl(string|array $url)
 */
class AdminMenu extends BaseService
{
    /**
     * @var AdminMenuModel
     */
    protected $menu;

    /**
     * @param array $options
     */
    public function __construct(array $options = [])
    {
        parent::__construct($options);

        $this->menu = AdminMenuModel::new();
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
     * @return AdminMenuModel
     * @svc
     */
    protected function getMenu(): AdminMenuModel
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
    protected function getMenusByUser(?UserModel $user = null)
    {
//        $menus = AdminMenuModel::all()->toTree();
//        return $menus->toMenu();

        $this->loadMenu();

        $user || $user = User::cur();
        if (!$user->isSuperAdmin() && Permission::isEnabledCheck()) {
            $permissions = $user->getActionPermissionCodes();
            $this->filterMenu($this->menu, $permissions);
        }

        return $this->menu->children->toMenu();
    }

    protected function loadMenu()
    {
        if (!$this->menu->hasChildren()) {
            $this->event->trigger('adminMenuGetMenus', $this);
        }
    }

    /**
     * @param AdminMenuModel $menu
     * @param array $permissions
     * @return AdminMenuModel
     * @internal
     */
    protected function filterMenu(AdminMenuModel $menu, array $permissions): AdminMenuModel
    {
        foreach ($menu->children as $i => $subMenu) {
            if (false === $subMenu->getMetadata('permission')) {
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
