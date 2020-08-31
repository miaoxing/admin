<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\User\Service\UserModel;

return new class extends BaseController {
    public function get()
    {
        return UserModel::toRet();
    }
};
