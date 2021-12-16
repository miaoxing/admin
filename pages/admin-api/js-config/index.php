<?php

use Miaoxing\App\Service\JsConfig;
use Miaoxing\Plugin\BaseController;

return new class () extends BaseController {
    protected $controllerAuth = false;

    public function get()
    {
        // TODO config
        $page = [
            'title' => '喵星商城',
            'copyright' => 'Miaoxing ©2021',
        ];

        return suc(['data' => JsConfig::toArray() + ['page' => $page]]);
    }
};
