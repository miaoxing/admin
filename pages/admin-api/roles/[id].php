<?php

use Miaoxing\App\Service\RoleModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\ItemTrait;
use Miaoxing\Services\Service\ShowAction;
use Miaoxing\Services\Service\UpdateAction;
use Wei\V;

return new class () extends BaseController {
    use ItemTrait;

    public function get()
    {
        return ShowAction::new()
            ->buildData(function (RoleModel $role) {
                return [
                    'permissionIds' => $role->permissions->getAll('id'),
                ];
            })
            ->exec($this);
    }

    public function patch()
    {
        return UpdateAction::new()
            ->validate(function ($role, $req) {
                $v = V::defaultOptional();
                $v->setModel($role);
                $v->modelColumn('name', '名称');
                $v->modelColumn('description', '描述');
                $v->modelColumn('isEnabled', '是否启用');
                $v->array('actions', '菜单和操作', 0, 100);
                $v->array('permissionIds', '权限', 0, 100);
                return $v->check($req);
            })
            ->afterSave(function (RoleModel $role, $req) {
                if (isset($req['permissionIds'])) {
                    $role->permissions()->syncRelation($req['permissionIds']);
                }
            })
            ->exec($this);
    }
};
