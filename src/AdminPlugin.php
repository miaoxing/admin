<?php

namespace Miaoxing\Admin;

use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\App\BaseController;
use Miaoxing\Services\Service\Url;
use Wei\RetTrait;

class AdminPlugin extends \Miaoxing\Plugin\BasePlugin
{
    use RetTrait;

    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    public function onAdminNavGetNavs(&$navs, &$categories, &$subCategories)
    {
        $categories['user'] = [
            'name' => '用户',
            'sort' => 700,
            'icon' => 'fa fa-user',
        ];

        $subCategories[] = [
            'parentId' => 'user',
            'name' => '管理员管理',
            'url' => 'admin/admins',
        ];

        $categories['marketing'] = [
            'name' => '营销',
            'sort' => 100,
        ];
    }

    public function onUserLogin(UserModel $user)
    {
        if ($user->isAdmin) {
            wei()->adminLog->log('用户登陆', $user);
        }
    }

    public function onBeforeStyle()
    {
        if ($this->app->isAdmin()) {
            wei()->page->addPluginAssets('admin');
        }
    }

    public function onBodyStart()
    {
        if ($this->app->isAdmin()) {
            wei()->view->display('@admin/_browser-update.php');
        }
    }

    public function onCheckAuth()
    {
        if ($this->app->isAdmin() && !User::cur()->isAdmin) {
            return $this->err([
                'message' => '很抱歉，您没有权限访问当前页面',
                'next' => Url::to('admin/login'),
            ]);
        }
    }
}
