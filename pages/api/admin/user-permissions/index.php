<?php

use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\User;

return new /**
 * @experimental
 */
class () extends BasePage {
    public function init()
    {
        parent::init();
        $this->removeMiddleware(CheckPagePermission::class);
    }

    public function get()
    {
        return suc([
            'data' => [
                'codes' => User::cur()->getPermissionCodes(),
            ],
        ]);
    }
};
