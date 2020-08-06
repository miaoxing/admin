<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\Model;
use Miaoxing\Plugin\Service\Plugin;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Rest\RestTrait;
use Wei\Event;
use Wei\Req;
use Wei\V;

class GroupsController extends BaseController
{
    use RestTrait;

    protected $controllerName = '分组管理';

    protected $controllerPermissionName = '用户分组管理';

    protected $actionPermissions = [
        'index,metadata' => '列表',
        'new,create' => '添加',
        'edit,update' => '编辑',
        'destroy' => '删除',
    ];

    public function metadataAction()
    {
        return suc([
            'hasWechatGroup' => Plugin::isInstalled('wechat-group'),
        ]);
    }

    protected function beforeUpdateFind(Req $req)
    {
        return V::key('name', '名称')->check($req);
    }

    protected function beforeSave(Req $req, Model $model)
    {
        return Event::until('groupUpdate', [$model]);
    }

    protected function beforeDestroy(Req $req, Model $model)
    {
        return Event::until('groupDestroy', [$model]);
    }

    protected function afterDestroy(Req $req, Model $model)
    {
        UserModel::where('groupId', $req['id'])->update('groupId', 0);
    }
}
