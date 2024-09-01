<?php

use Miaoxing\Admin\Service\AdminMenuModel;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Services\Page\CollGetTrait;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;

return new class extends BasePage {
    use CollGetTrait;
    use PostToPatchTrait;

    protected string $className = '后台菜单';

    public function get()
    {
        return IndexAction::new()
            ->beforeFind(static function (AdminMenuModel $menus) {
                $menus->setDefaultSortColumn(['sort', 'id']);
            })
            ->afterReqQuery(static function (AdminMenuModel $menus) {
                $menus->resetQueryParts(['limit', 'offset']);
            })
            ->afterFind(static function (AdminMenuModel $menus) {
                $menus->toTree();
            })
            ->exec($this);
    }
};
