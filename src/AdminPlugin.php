<?php

namespace Miaoxing\Admin;

use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\App\BaseController;
use Miaoxing\Services\Service\Url;

class AdminPlugin extends \Miaoxing\Plugin\BasePlugin
{
    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    protected $adminNavId = 'user';

    public function onControllerInit(BaseController $controller)
    {
        if ($this->app->isAdmin()) {
            //$controller->middleware(AdminAuth::class);
            // TODO 检查是否为管理员
        }
    }

    public function onAdminNavGetNavs(&$navs, &$categories, &$subCategories)
    {
        $categories['user'] = [
            'name' => '用户',
            'sort' => 700,
        ];

        $subCategories['user-admin'] = [
            'parentId' => 'user',
            'name' => '管理员',
            'icon' => 'fa fa-shield',
            'sort' => 0,
        ];

        $navs[] = [
            'parentId' => 'user-admin',
            'url' => 'admin/admins',
            'name' => '管理员管理',
            'sort' => 1000,
        ];

        $categories['marketing'] = [
            'name' => '营销',
            'sort' => 100,
        ];

        $subCategories['marketing-activities'] = [
            'parentId' => 'marketing',
            'name' => '活动',
            'icon' => 'fa fa-gavel',
            'sort' => 1000,
        ];

        $subCategories['marketing-games'] = [
            'parentId' => 'marketing',
            'name' => '游戏',
            'icon' => 'fa fa-gamepad',
            'sort' => 900,
        ];

        $subCategories['marketing-stat'] = [
            'parentId' => 'marketing',
            'name' => '统计',
            'icon' => 'fa fa-bar-chart',
            'sort' => 500,
        ];
    }

    public function onUserLogin(UserModel $user)
    {
        if ($user['admin']) {
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

    public function onIsAuthed()
    {
        if ($this->app->isAdmin() && !User::cur()->admin) {
            return false;
        }
    }

    public function onLoginUrl()
    {
        if ($this->app->isAdmin()) {
            return Url::to('admin/login');
        }
    }
}
