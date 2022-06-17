<?php

namespace Miaoxing\Admin;

use Miaoxing\Admin\Service\AdminLogModel;
use Miaoxing\Admin\Service\AdminMenu;
use Miaoxing\Plugin\BasePlugin;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Service\Url;
use Wei\RetTrait;

class AdminPlugin extends BasePlugin
{
    use RetTrait;

    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    protected $code = 203;

    public function onAdminMenuGetMenus(AdminMenu $menu)
    {
        $menu->addChild('index')->setLabel('首页')->setUrl('admin')->setSort(1000);
        $menu->addChild('user')->setLabel('用户')->setSort(700);
        $menu->addChild('content')->setLabel('内容')->setSort(500);
        $menu->addChild('marketing')->setLabel('营销')->setSort(400);
        $menu->addChild('setting')->setLabel('设置')->setSort(300);

        $menu->child('user')
            ->addChild()
            ->setLabel('管理员管理')
            ->setUrl('admin/admins');
    }

    public function onUserLogin(UserModel $user)
    {
        if ($user->isAdmin) {
            AdminLogModel::log('用户登陆', $user);
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
            $ret['next'] = Url::to('admin/login');
            return $ret;
        }

        if (!User::cur()->isAdmin) {
            return $this->err([
                'message' => '很抱歉，您没有权限访问当前页面',
                'next' => Url::to('admin/login'),
            ]);
        }
    }
}
