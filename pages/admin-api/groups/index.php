<?php

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;

return new class () extends BaseController {
    use PostToPatchTrait;

    protected $className = '分组';

    public function get()
    {
        return IndexAction::new()
            ->beforeFind(function (GroupModel $models) {
                $models->where('level', 1)
                    ->setDefaultSortColumn(['sort', 'id']);
            })
            ->afterFind(function (GroupModel $models) {
                $models->load('children');
            })
            ->exec($this);
    }
};
