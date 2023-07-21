<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\UserModel;

return new class () extends BasePage {
    public function get()
    {
        return suc([
            'data' => [
                'user' => UserModel::new(),
            ],
        ]);
    }
};
