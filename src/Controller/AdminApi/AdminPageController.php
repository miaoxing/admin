<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;
use ReflectionClass;

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
                $menus[$i]['navs'][$j]['url'] = $this->url($menu2['url']);
            }
        }

        return $this->suc([
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
                if (!in_array($action, $actions)) {
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
                'url' => $this->url('admin'),
            ],
            [
                'name' => $controllerName,
                'url' => $this->url($controller),
            ],
        ];
        if ($action !== 'index') {
            $data[] = [
                'name' => $actionName,
                'url' => $this->url($controller . '/' . $action),
            ];
        }

        return $this->suc(['data' => $data]);
    }
}
