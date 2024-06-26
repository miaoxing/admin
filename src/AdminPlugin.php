<?php

namespace Miaoxing\Admin;

use Miaoxing\Admin\Service\AdminLogModel;
use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\App\Service\PermissionMap;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\BasePlugin;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;
use Wei\RetTrait;

/**
 * @mixin \PermissionPropMixin
 */
class AdminPlugin extends BasePlugin
{
    use RetTrait;

    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    protected $code = 203;

    public function onAdminMenuGetMenus(AdminMenu $menu)
    {
        $user = $menu->addChild('user')
            ->setLabel('用户')
            ->setIcon('https://cdnjs.cloudflare.com/ajax/libs/ant-design-icons-svg/4.3.1/outlined/user.svg')
            ->setSort(700);

        $menu->addChild('content')
            ->setLabel('内容')
            ->setIcon('https://cdnjs.cloudflare.com/ajax/libs/ant-design-icons-svg/4.3.1/outlined/book.svg')
            ->setSort(500);

        $menu->addChild('marketing')
            ->setLabel('营销')
            ->setIcon('https://cdnjs.cloudflare.com/ajax/libs/ant-design-icons-svg/4.3.1/outlined/gift.svg')
            ->setSort(400);

        $setting = $menu->addChild('setting')
            ->setLabel('设置')
            ->setIcon('https://cdnjs.cloudflare.com/ajax/libs/ant-design-icons-svg/4.3.1/outlined/setting.svg')
            ->setSort(300);
        $menu->addChild()->setLabel('修改密码')->setUrl('admin/password')->setExtra('visible', false)
            ->setExtra('permission', false);
        $menu->addChild()->setLabel('修改资料')->setUrl('admin/user')->setExtra('visible', false)
            ->setExtra('permission', false);

        $admins = $user->addChild()->setLabel('管理员管理')->setUrl('admin/admins');
        $admins->addChild()->setUrl('admin/admins/new')->setLabel('添加');
        $admins->addChild()->setUrl('admin/admins/[id]/edit')->setLabel('编辑');

        $groups = $user->addChild()->setLabel('分组管理')->setUrl('admin/groups');
        $groups->addChild()->setLabel('添加')->setUrl('admin/groups/new');
        $groups->addChild()->setLabel('编辑')->setUrl('admin/groups/[id]/edit');
        $groups->addChild()->setLabel('删除')->setUrl('admin/groups/[id]/delete');

        if ($this->permission->isEnabledRoleManage()) {
            $roles = $user->addChild()->setLabel('角色管理')->setUrl('admin/roles');
            $roles->addChild()->setLabel('添加')->setUrl('admin/roles/new');
            $roles->addChild()->setLabel('编辑')->setUrl('admin/roles/[id]/edit');
            $roles->addChild()->setLabel('删除')->setUrl('admin/roles/delete');
        }

        if ($this->permission->isEnabledPermissionManage()) {
            $permissions = $user->addChild()->setLabel('权限管理')->setUrl('admin/permissions');
            $permissions->addChild()->setLabel('添加')->setUrl('admin/permissions/new');
            $permissions->addChild()->setLabel('编辑')->setUrl('admin/permissions/[id]/edit');
            $permissions->addChild()->setLabel('删除')->setUrl('admin/permissions/[id]/delete');
        }

        $setting->addChild()->setLabel('后台设置')->setUrl('admin/admin-settings')->setSort(10);
    }

    public function onPermissionGetMap(PermissionMap $map)
    {
        $map->prefix('admin/admins', static function (PermissionMap $map) {
            $map->addList('', [
                'GET api/admin/groups',
            ]);
            $map->addNew('', [
                'GET api/admin/groups',
            ]);
            $map->addEdit('', [
                'GET api/admin/groups',
            ]);
        });

        $map->prefix('admin/groups', static function (PermissionMap $map) {
            $map->addList();
            $map->addNew('', [
                'GET api/admin/groups',
            ]);
            $map->addEdit('', [
                'GET api/admin/groups',
            ]);
            $map->addDelete();
        });

        $map->prefix('admin/roles', static function (PermissionMap $map) {
            $map->addList();
            $map->addNew('', [
                'GET api/admin/permissions',
            ]);
            $map->addEdit('', [
                'GET api/admin/permissions',
            ]);
            $map->addDelete();
        });

        $map->prefix('admin/permissions', static function (PermissionMap $map) {
            $map->addList();
            $map->addNew();
            $map->addEdit();
            $map->addDelete();
        });

        $map->add('admin/admin-settings', [
            'PATCH api/admin/admin-settings',
        ]);
    }

    public function onPageInit(BasePage $page)
    {
        if ($this->app->isAdmin() && $this->permission->isEnabledCheck()) {
            $page->middleware(CheckPagePermission::class);
        }
    }

    public function onUserLogin(UserModel $user)
    {
        if ($user->isAdmin) {
            AdminLogModel::log('用户登陆', $user);
        }
    }

    public function onBeforeUserLogout(UserModel $user)
    {
        if ($user->isAdmin) {
            AdminLogModel::log('用户退出', $user);
        }
    }

    public function onCheckAuth()
    {
        if (!$this->app->isAdmin()) {
            return;
        }

        $ret = User::checkLogin();
        if ($ret->isErr()) {
            // 指定后台登录的地址
            $ret['next'] = 'admin/login';
            return $ret;
        }

        if (!User::cur()->isAdmin) {
            return $this->err([
                'message' => '很抱歉，您没有权限访问当前页面',
                'next' => 'admin/login',
            ]);
        }
    }
}
