<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;
use ReflectionClass;
use Wei\Url;

/**
 * 后台页面的配置
 */
class AdminPageController extends BaseController
{
    public function indexAction()
    {
        $menus = array_values(wei()->adminNav->getCategories());

        foreach ($menus as $i => $menu) {
            foreach ($menu['navs'] as $j => $menu2) {
                $menus[$i]['navs'][$j]['url'] = Url::to($menu2['url']);
            }
        }

        return suc([
            'menus' => $menus,
            'user' => User::cur(),
        ]);
    }

    public function breadcrumbAction($req)
    {
        $controller = $req['ctrl'];
        $apiController = str_replace('admin/', 'adminApi/', $controller);
        $action = $req['act'];

        $controllerName = '';
        $actionName = '';
        $classes = wei()->app->getControllerClasses($apiController);
        foreach ($classes as $class) {
            if (!class_exists($class)) {
                continue;
            }

            $class = new ReflectionClass($class);
            $defaultProperties = $class->getDefaultProperties();
            if (!$defaultProperties['actionPermissions']) {
                continue;
            }

            foreach ($defaultProperties['actionPermissions'] as $actions => $name) {
                $actions = explode(',', $actions);
                if (!in_array($action, $actions, true)) {
                    continue;
                }

                $controllerName = $defaultProperties['controllerName'];
                $actionName = $name;
                break 2;
            }
        }

        if (!$controllerName) {
            return $this->err('未定义方法名称');
        }

        $data = [
            [
                'name' => '首页',
                'url' => Url::to('admin'),
            ],
            [
                'name' => $controllerName,
                'url' => Url::to($controller),
            ],
        ];
        if ('index' !== $action) {
            $data[] = [
                'name' => $actionName,
                'url' => Url::to($controller . '/' . $action),
            ];
        }

        return suc(['data' => $data]);
    }
}
