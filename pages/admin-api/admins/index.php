<?php

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;
use Miaoxing\User\Service\UserModel;

return new class extends BaseController {
    use PostToPatchTrait;

    public function createModel()
    {
        return UserModel::new()->where('isAdmin', true);
    }

    public function get()
    {
        $groups = [];
        return IndexAction
            ::beforeFind(function (UserModel $models) {
                $models->where('isAdmin', true)
                    ->reqQuery();
            })
            ->afterFind(function (UserModel $users) use (&$groups) {
                // NOTE: UserModel 里还没有 group 关联，需手动读取
                $groupIds = array_unique(array_filter($users->getAll('groupId')));
                $groups = $groupIds ? GroupModel::findAll($groupIds)->indexBy('id') : [];
            })
            ->buildData(function (UserModel $user) use (&$groups) {
                return [
                    'group' => $groups[$user->groupId] ?? null,
                ];
            })
            ->exec($this);
    }
};
