<?php

use Miaoxing\Admin\Service\AdminPage;
use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\Config;
use Wei\V;

return new class extends BasePage {
    protected $className = '后台设置';

    public function get()
    {
        $adminPage = AdminPage::instance();

        $settings = Config::getGlobalMultiple([
            'adminPage.title',
            'adminPage.logo',
            'adminPage.entryBg',
            'adminPage.copyright',
            'adminLogin.icpRecordNumber',
            'adminLogin.publicSecurityRecordNumber',
        ], [
            'adminPage.title' => $adminPage->getTitle(),
            'adminPage.logo' => $adminPage->getLogo(),
            'adminPage.entryBg' => $adminPage->getEntryBg(),
            'adminPage.copyright' => $adminPage->getCopyright(),
        ]);

        return suc([
            'data' => $settings,
        ]);
    }

    public function patch($req)
    {
        // 基础信息
        $v = V::defaultOptional();
        $v->string('adminPage.title', '标题');
        $v->string('adminPage.logo', 'Logo');
        $v->string('adminPage.entryBg', '入口页背景图');
        $v->string('adminPage.copyright', '版权信息');
        $data = $v->assert($req);
        Config::setGlobalMultiple($data, [
            'preload' => true,
        ]);

        // 登录设置
        $v = V::defaultOptional();
        $v->string('adminLogin.icpRecordNumber', 'ICP 备案号');
        $v->string('adminLogin.publicSecurityRecordNumber', '公安备案号');
        $data = $v->assert($req);
        Config::setGlobalMultiple($data);

        Config::publishPreload();

        return suc();
    }
};
