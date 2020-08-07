<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\Model;
use Miaoxing\Plugin\Service\Plugin;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Service\DestroyAction;
use Miaoxing\Services\Action\CrudTrait;
use Miaoxing\Services\Service\UpdateAction;
use Wei\Event;
use Wei\V;

class GroupsController extends BaseController
{
    use CrudTrait;

    protected $controllerName = '分组管理';

    protected $controllerPermissionName = '用户分组管理';

    protected $actionPermissions = [
        'index,indexConfig' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'destroy' => '删除',
    ];

    public function indexConfigAction()
    {
        return suc([
            'hasWechatGroup' => Plugin::isInstalled('wechat-group'),
        ]);
    }

    public function updateAction()
    {
        return UpdateAction
            ::beforeFind(function () {
                return V::key('name', '名称')->check($this->req);
            })
            ->beforeSave(function (Model $model) {
                return Event::until('groupUpdate', [$model]);
            })
            ->exec($this);
    }

    public function destroyAction()
    {
        return DestroyAction
            ::beforeDestroy(function (Model $model) {
                return Event::until('groupDestroy', [$model]);
            })
            ->afterDestroy(function () {
                UserModel::where('groupId', $this->req['id'])->update('groupId', 0);
            })
            ->exec($this);
    }
}
