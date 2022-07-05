<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\Service\Config;

return new class () extends BasePage {
    public function get()
    {
        $settings = Config::getAppMultiple([
            'adminLogin.icpRecordNumber',
            'adminLogin.publicSecurityRecordNumber',
        ]);

        return suc([
            'data' => $settings,
        ]);
    }

    public function patch($req)
    {
        Config::setAppMultiple([
            'adminLogin.icpRecordNumber' => (string) $req['adminLogin.icpRecordNumber'],
            'adminLogin.publicSecurityRecordNumber' => (string) $req['adminLogin.publicSecurityRecordNumber'],
        ]);

        return suc();
    }
};
