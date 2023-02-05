<?php

namespace Miaoxing\Admin;

use Miaoxing\Admin\Service\AdminLogModel;
use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\BasePlugin;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;
use Wei\RetTrait;

class AdminPlugin extends BasePlugin
{
    use RetTrait;

    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    protected $code = 203;

    public function onAdminMenuGetMenus(AdminMenu $menu)
    {
        $user = $menu->addChild('user')->setLabel('用户')->setSort(700);
        $menu->addChild('content')->setLabel('内容')->setSort(500);
        $menu->addChild('marketing')->setLabel('营销')->setSort(400);
        $setting = $menu->addChild('setting')->setLabel('设置')->setSort(300);
        $menu->addChild()->setLabel('修改密码')->setUrl('admin/password')->setExtra('visible', false);
        $menu->addChild()->setLabel('修改资料')->setUrl('admin/user')->setExtra('visible', false);

        $admins = $user->addChild()->setLabel('管理员管理')->setUrl('admin/admins');
        $admins->addChild()->setUrl('admin/admins/new')->setLabel('添加');
        $admins->addChild()->setUrl('admin/admins/[id]/edit')->setLabel('编辑');

        $groups = $user->addChild()->setLabel('分组管理')->setUrl('admin/groups');
        $groups->addChild()->setLabel('添加')->setUrl('admin/groups/new');
        $groups->addChild()->setLabel('编辑')->setUrl('admin/groups/[id]/edit');

        $setting->addChild()->setLabel('后台设置')->setUrl('admin/admin-settings')->setSort(10);
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
