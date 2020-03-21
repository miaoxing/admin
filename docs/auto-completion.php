<?php

/**
 * @property    Miaoxing\Admin\Service\AdminLog $adminLog 后台管理日志
 * @method      \Miaoxing\Admin\Service\AdminLog|\Miaoxing\Admin\Service\AdminLog[] adminLog()
 */
class AdminLogMixin {
}

/**
 * @property    Miaoxing\Admin\Service\AdminNav $adminNav 后台导航
 */
class AdminNavMixin {
}

/**
 * @mixin AdminLogMixin
 * @mixin AdminNavMixin
 */
class AutoCompletion {
}

/**
 * @return AutoCompletion
 */
function wei()
{
    return new AutoCompletion;
}

/** @var Miaoxing\Admin\Service\AdminLog $adminLog */
$adminLog = wei()->adminLog;

/** @var Miaoxing\Admin\Service\AdminNav $adminNav */
$adminNav = wei()->adminNav;
