<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\Service\Model;
use Miaoxing\Plugin\Service\Plugin;
use Miaoxing\Services\Rest\RestTrait;
use Wei\Request;
use Miaoxing\Services\Service\V;
use Wei\Event;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Plugin\BaseController;

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

    protected function beforeUpdateFind(Request $req)
    {
        return V::key('name', '名称')->check($req);
    }

    protected function beforeSave(Request $req, Model $model)
    {
        return Event::until('groupUpdate', [$model]);
    }

    protected function beforeDestroy(Request $req, Model $model)
    {
        return Event::until('groupDestroy', [$model]);
    }

    protected function afterDestroy(Request $req, Model $model)
    {
        UserModel::where('groupId', $req['id'])->update('groupId', 0);
    }
}
