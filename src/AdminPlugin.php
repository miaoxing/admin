<?php

namespace Miaoxing\Admin;

use Miaoxing\Admin\Service\AdminLogModel;
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

        $categories['content'] = [
            'name' => '内容',
            'sort' => 95,
        ];

        $categories['setting'] = [
            'name' => '设置',
            'sort' => 90,
        ];
    }

    public function onUserLogin(UserModel $user)
    {
        if ($user->isAdmin) {
            AdminLogModel::log('用户登陆', $user);
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
