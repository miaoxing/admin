<?php

namespace Miaoxing\Admin\Service;

/**
 * 后台导航
 *
 * @mixin \EventMixin
 * @mixin \ViewMixin
 * @mixin \AppMixin
 * @mixin \PluginMixin
 */
class AdminNav extends \Miaoxing\Plugin\BaseService
{
    protected $categories = [];

    /**
     * 当前的子菜单,显示在侧边栏
     *
     * @var array
     */
    protected $curSubCategories = [];

    /**
     * 导航项的默认数据
     *
     * @var array
     */
    protected $navDefaults = [
        'parentId' => '',
        'url' => '',
        'name' => '',
        'icon' => '',
        'sort' => 50,
        'active' => false,
    ];

    protected $defaultIndexUrl = 'admin/index/index';

    /**
     * 获取首页地址
     */
    public function getIndexUrl()
    {
        $categories = wei()->adminNav->getCategories();
        $firstCategory = current($categories);
        if (isset($firstCategory['navs'][0]['navs'][0]['url'])) {
            return $firstCategory['navs'][0]['navs'][0]['url'];
        } else {
            return $this->defaultIndexUrl;
        }
    }

    /**
     * 获取导航数据
     *
     * @return array
     */
    public function getCategories()
    {
        if ($this->categories) {
            return $this->categories;
        }

        $navs = $categories = $subCategories = [];
        $this->event->trigger('adminNavGetNavs', [&$navs, &$categories, &$subCategories]);

        $categories = $this->combine($categories, $subCategories, $navs);
        $categories = $this->filter($categories);
        $categories = $this->sort($categories);

        $this->categories = $categories;

        return $categories;
    }

    /**
     * 检查当前地址是否在指定的子分类中
     *
     * @param array $category
     * @return bool
     */
    protected function isInCategories(array $category)
    {
        $url = ltrim(wei()->req->getPathInfo(), '/');
        foreach ($category['navs'] as $i => $subCategories) {
            foreach ($subCategories['navs'] as $nav) {
                if ($nav['url'] == $url) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * 将导航项加入到分类中
     *
     * @param array $categories
     * @param array $subCategories
     * @param array $navs
     * @return array
     */
    protected function combine(array $categories, array $subCategories, array $navs)
    {
        // 将导航项加入到子分类中
        foreach ($navs as $nav) {
            $nav += $this->navDefaults;
            $subCategories[$nav['parentId']]['navs'][] = $nav;
        }

        // 将子分类加到父分类中
        foreach ($subCategories as $id => $category) {
            $category += $this->navDefaults;
            $categories[$category['parentId']]['navs'][] = ['id' => $id] + $category;
        }

        return $categories;
    }

    /**
     * 过滤空的分类
     *
     * @param array $categories
     * @return array
     */
    protected function filter(array $categories)
    {
        // 过滤空的父分类
        foreach ($categories as $i => $category) {
            if (
                (!isset($category['navs']) || !$category['navs'])
                && !isset($category['url'])
            ) {
                unset($categories[$i]);
            }
        }

        return $categories;
    }

    /**
     * 对导航排序
     *
     * @param array $categories
     * @return array
     */
    protected function sort($categories)
    {
        foreach ($categories as &$category) {
            // 对子分类排序
            $category['navs'] = $this->orderBy($category['navs'] ?? []);

            // 取第一个导航项的链接,作为父分类的链接
            if (!isset($category['url'])) {
                $category['url'] = $category['navs'][0]['navs'][0]['url'] ?? '';
            }
        }

        // 对父分类排序
        return $this->orderBy($categories);
    }

    /**
     * 获取当前导航的大类编号
     *
     * @return string|null
     * @throws \Exception
     */
    protected function getAdminNavId()
    {
        // 1. 从当前视图获取(控制器或行为中的变量)
        $adminNavId = $this->view['adminNavId'];
        if ($adminNavId) {
            return $adminNavId;
        }

        // 2. 从插件配置中获取
        $pluginId = $this->app->getPlugin();
        if ($pluginId) {
            return $this->plugin->getOneById($pluginId)->getOption('adminNavId');
        }

        return null;
    }

    /**
     * 二维数组排序
     *
     * @param array $array
     * @param string $key
     * @param int $type
     * @return array
     */
    protected function orderBy(array $array, $key = 'sort', $type = \SORT_DESC)
    {
        $array2 = [];
        foreach ($array as $k => $v) {
            $array2[$k] = $v[$key];
        }
        array_multisort($array2, $type, $array);

        return $array;
    }
}
