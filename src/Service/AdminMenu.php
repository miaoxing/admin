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
        // 如果数据库没有菜单，则通过事件加载菜单
        $menus = AdminMenuModel::where('isEnabled', true)->all()->toTree();
        if (!$menus->count()) {
            $this->loadMenu();
            $menus = $this->menu->children;
        }

        $user || $user = User::cur();
        if (!$user->isSuperAdmin() && Permission::isEnabledCheck()) {
            $permissions = $user->getActionPermissionCodes();
            $this->filterMenu($menus, $permissions);
        }

        return $menus->toMenu();
    }

    protected function loadMenu()
    {
        if (!$this->menu->hasChildren()) {
            $this->event->trigger('adminMenuGetMenus', $this);
        }
    }

    /**
     * @param AdminMenuModel|AdminMenuModel[] $menus
     * @param array $permissions
     * @return AdminMenuModel
     * @internal
     */
    protected function filterMenu(AdminMenuModel $menus, array $permissions): AdminMenuModel
    {
        foreach ($menus as $i => $menu) {
            if (false === $menu->getMetadata('permission')) {
                continue;
            }

            if ($menu->getUrl() && !in_array($menu->getUrl(), $permissions, true)) {
                unset($menus[$i]);
            }
            $this->filterMenu($menu->children, $permissions);
        }
        return $menus;
    }
}
