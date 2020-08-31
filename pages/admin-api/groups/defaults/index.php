<?php

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\BaseController;

return new class extends BaseController {
    public function get()
    {
        return GroupModel::toRet();
    }
};
