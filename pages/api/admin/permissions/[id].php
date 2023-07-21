<?php

use Miaoxing\App\Service\PermissionModel;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Services\Page\ItemTrait;
use Miaoxing\Services\Service\UpdateAction;
use Wei\V;

return new class () extends BasePage {
    use ItemTrait;

    protected $className = '权限';

    public function patch()
    {
        return UpdateAction::new()
            ->validate(function (PermissionModel $permission, $req) {
                $v = V::defaultOptional()->defaultNotEmpty();
                $v->setModel($permission);
                $v->modelColumn('name', '名称')->requiredIfNew()->notModelDup();
                $v->modelColumn('code', '标识')->requiredIfNew()->notModelDup();
                $v->modelColumn('description', '描述')->allowEmpty();
                return $v->check($req);
            })
            ->exec($this);
    }
};
