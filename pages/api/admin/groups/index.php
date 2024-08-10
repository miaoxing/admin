<?php

use Miaoxing\App\Service\GroupModel;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;

return new class extends BasePage {
    use PostToPatchTrait;

    protected $className = '分组';

    public function get()
    {
        return IndexAction::new()
            ->beforeFind(static function (GroupModel $models) {
                $models->where('level', 1)
                    ->setDefaultSortColumn(['sort', 'id']);
            })
            ->afterFind(static function (GroupModel $models) {
                $models->load('children');
            })
            ->exec($this);
    }
};
