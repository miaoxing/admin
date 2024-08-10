<?php

use Miaoxing\App\Service\JsConfig;
use Miaoxing\Plugin\BasePage;

return new class extends BasePage {
    protected $requireAuth = false;

    public function get()
    {
        $page = wei()->adminPage;

        $config = [
            'title' => $page->getTitle(),
            'logo' => $page->getLogo(),
            'copyright' => $page->getCopyright(),
            'bg' => $page->getBg(),
        ];

        return suc(['data' => JsConfig::toArray() + ['page' => $config]]);
    }
};
