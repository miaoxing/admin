<?php

use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\UserModel;

return new class extends BaseController {
    public function get()
    {
        return suc([
            'data' => [
                'user' => UserModel::new(),
            ]
        ]);
    }
};
