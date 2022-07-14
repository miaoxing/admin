<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Services\Service\DestroyAction;
use Miaoxing\Services\Service\ShowAction;
use Miaoxing\Services\Service\UpdateAction;
use Wei\Event;
use Wei\V;

return new class () extends BaseController {
    public function get()
    {
        return ShowAction::exec($this);
    }

    public function patch()
    {
        return UpdateAction::new()
            ->beforeFind(function () {
                $v = V::new();
                $v->tinyChar('name', '名称');
                return $v->check($this->req);
            })
            ->beforeSave(function (BaseModel $model) {
                return Event::until('groupUpdate', [$model]);
            })
            ->exec($this);
    }

    public function delete()
    {
        return DestroyAction
            ::beforeDestroy(function (BaseModel $model) {
                return Event::until('groupDestroy', [$model]);
            })
            ->afterDestroy(function () {
                UserModel::where('groupId', $this->req['id'])->update('groupId', 0);
            })
            ->exec($this);
    }
};
