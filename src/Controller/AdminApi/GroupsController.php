<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Miaoxing\Plugin\Service\Model;
use Miaoxing\Plugin\Service\Ret;
use Miaoxing\Plugin\RetException;
use Miaoxing\Plugin\Service\Plugin;
use Miaoxing\Services\Rest\RestTrait;
use Miaoxing\Services\Service\Request;
use Miaoxing\Services\Service\V;
use Wei\Event;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Admin\Service\GroupModel;

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

    /**
     * @param $req
     * @return Ret
     * @throws RetException
     */
    public function updateAction($req)
    {
        $ret = V::key('name', '名称')->check($req);
        $this->tie($ret);

        $group = GroupModel::findOrInit($req['id'])->fromArray($req);

        $ret = Event::until('groupUpdate', [$group]);
        $this->tie($ret);

        $group->save($req);

        return suc();
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
