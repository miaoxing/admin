<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

return new class() extends BaseController {
    public function get()
    {
        return User::cur()->toRet();
    }
};
