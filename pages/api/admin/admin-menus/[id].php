<?php

use Miaoxing\Admin\Service\AdminMenuModel;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Services\Page\ItemTrait;
use Miaoxing\Services\Service\UpdateAction;
use Wei\V;

return new class extends BasePage {
    use ItemTrait;

    protected $className = '权限';

    public function patch()
    {
        return UpdateAction::new()
            ->validate(static function (AdminMenuModel $adminMenu, $req) {
                $v = V::defaultOptional();
                $v->setModel($adminMenu);
                $v->modelColumn('parentId', '上级菜单')->allowEmpty()->modelExists(AdminMenuModel::class);
                $v->modelColumn('label', '名称')->requiredIfNew()->notEmpty();
                $v->modelColumn('url', '链接');
                $v->modelColumn('icon', '图标');
                $v->modelColumn('sort', '顺序');
                $v->modelColumn('isShow', '是否显示');
                $v->modelColumn('isEnabled', '是否显示');
                return $v->check($req);
            })
            ->exec($this);
    }
};
