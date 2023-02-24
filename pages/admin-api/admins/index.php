<?php

use Miaoxing\Admin\Service\AdminModel;
use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;

return new class () extends BaseController {
    use PostToPatchTrait;

    public function get()
    {
        $groups = [];
        return IndexAction::new()
            ->afterFind(function (AdminModel $admins) use (&$groups) {
                $admins->load('user');

                // NOTE: UserModel 里还没有 group 关联，需手动读取
                $groupIds = [];
                /** @var AdminModel $admin */
                foreach ($admins as $admin) {
                    $groupIds[] = $admin->user->groupId;
                }
                $groupIds = array_unique(array_filter($groupIds));

                $groups = $groupIds ? GroupModel::findAll($groupIds)->indexBy('id') : [];
                if ($groups) {
                    $groups->load('parent');
                }
            })
            ->buildData(function (AdminModel $admin) use (&$groups) {
                return [
                    'group' => $groups[$admin->user->groupId] ?? null,
                ];
            })
            ->exec($this);
    }
};
