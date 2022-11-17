<?php

use Miaoxing\Admin\Service\GroupModel;
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
                $v = V::defaultOptional()->defaultNotEmpty();
                $v->tinyChar('name', '名称');
                return $v->check($this->req);
            })
            ->beforeSave(function (GroupModel $group) {
                // 选择了父栏目,但类型和父栏目一致,同时层级为父栏目加1
                if ($group->parentId) {
                    if ($group->parentId === $group->id) {
                        return err('不能使用自己作为父级分组');
                    }

                    if ($group->children()->first()) {
                        return err('当前只支持 2 级分组，该分组已有子分组，不能成为其他分组的子分组');
                    }

                    $parent = $group->parent;
                    $group->level = $parent->level + 1;
                } else {
                    $group->level = 1;
                }

                return Event::until('groupUpdate', [$group]);
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
