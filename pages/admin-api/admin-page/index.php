<?php

use Miaoxing\Plugin\BaseController;
use Wei\Url;

return new class() extends BaseController {
    public function get()
    {
        return suc([
            'data' => [
                'menus' => $this->getMenus(),
                'pages' => $this->getPages(),
                'title' => '喵星商城',
                'logo' => Url::to('images/logo.svg'),
            ],
        ]);
    }

    private function getPages()
    {
        $pages = [];
        $files = glob('plugins/*/pages/_config.php');
        foreach ($files as $file) {
            $pages = $this->mergeConfig($pages, require $file);
        }

        return $this->filterConfig($pages);
    }

    private function getMenus()
    {
        $menus = array_values(wei()->adminNav->getCategories());

        foreach ($menus as $i => $menu) {
            foreach ($menu['navs'] as $j => $menu2) {
                $menus[$i]['navs'][$j]['url'] = Url::to($menu2['url']);
            }
        }

        return $menus;
    }

    private function filterConfig($pages)
    {
        $result = [];
        foreach ($pages as $path => $next) {
            if ('/_' === substr($path, 0, 2)) {
                continue;
            }

            if ('/' === substr($path, 0, 1)) {
                $result[$path] = $this->filterConfig($next);
                continue;
            }

            if (in_array($path, ['name'], true)) {
                $result[$path] = $next;
            }
        }
        return $result;
    }

    private function mergeConfig($array, $array1)
    {
        foreach ($array1 as $key => $value) {
            // create new key in $array, if it is empty or not an array
            if (!isset($array[$key]) || (isset($array[$key]) && !is_array($array[$key]))) {
                $array[$key] = [];
            }

            // overwrite the value in the base array
            if (is_array($value)) {
                // 如果可能是数字数组，直接合并
                if (isset($value[0])) {
                    $value = array_merge($array[$key], $value);
                } else {
                    $value = $this->mergeConfig($array[$key], $value);
                }
            }

            $array[$key] = $value;
        }
        return $array;
    }
};
