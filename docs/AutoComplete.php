<?php

namespace MiaoxingDoc\Admin {

    /**
     * @property    \Miaoxing\Admin\Service\AdminLog $adminLog 后台管理日志
     * @method      \Miaoxing\Admin\Service\AdminLog|\Miaoxing\Admin\Service\AdminLog[] adminLog()
     *
     * @property    \Miaoxing\Admin\Service\AdminNav $adminNav 后台导航
     *
     * @property    \Miaoxing\Admin\Service\CsvExporter $csvExporter Csv格式数据导出服务
     *
     * @property    \Miaoxing\Admin\Service\SexConst $sexConst 性别常量服务
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

    /** @var Miaoxing\Admin\Service\CsvExporter $csvExporter */
    $csvExporter = wei()->csvExporter;

    /** @var Miaoxing\Admin\Service\SexConst $sexConst */
    $sexConst = wei()->sexConst;
}
