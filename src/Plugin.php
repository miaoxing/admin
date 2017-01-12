<?php

namespace Miaoxing\Admin;

use Miaoxing\Plugin\Service\User;

class Plugin extends \miaoxing\plugin\BasePlugin
{
    protected $name = '后台';

    protected $description = '提供后台布局,头部菜单,侧边栏菜单等功能';

    protected $adminNavId = 'user';

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
            'url' => 'admin/admin/index',
            'name' => '管理员管理',
            'sort' => 1000,
        ];
    }

    public function onUserLogin(User $user)
    {
        if ($user['admin']) {
            wei()->adminLog->log('用户登陆', $user);
        }
    }
}
