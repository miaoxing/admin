<?php

namespace MiaoxingDoc\Admin {

    /**
     * @property    \Miaoxing\Admin\Service\AdminLog $adminLog 后台管理日志
     * @method      \Miaoxing\Admin\Service\AdminLog|\Miaoxing\Admin\Service\AdminLog[] adminLog()
     *
     * @property    \Miaoxing\Admin\Service\AdminNav $adminNav 后台导航
     */
    class AutoComplete
    {
    }
}

namespace {

    /**
     * @return MiaoxingDoc\Admin\AutoComplete
     */
    function wei()
    {
    }

    /** @var Miaoxing\Admin\Service\AdminLog $adminLog */
    $adminLog = wei()->adminLog;

    /** @var Miaoxing\Admin\Service\AdminNav $adminNav */
    $adminNav = wei()->adminNav;
}
