<?php

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Services\Page\PostToPatchTrait;
use Miaoxing\Services\Service\IndexAction;
use Wei\Req;

return new class extends BaseController {
    use PostToPatchTrait;

    public function createModel()
    {
        return GroupModel::new();
    }

    public function get()
    {
        return IndexAction
            ::beforeFind(function (GroupModel $models, Req $req) {
                if ($req['withUngroup']) {
                    $models->resetSqlPart('limit')->resetSqlPart('offset');
                }
            })->afterFind(function (GroupModel $models, Req $req) {
                if ($req['withUngroup']) {
                    $models->withUngroup();
                }
            })->exec($this);
    }
};
