<?php

use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BaseController;
use Miaoxing\Plugin\Service\User;

return new /**
 * @experimental
 */
class () extends BaseController {
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
