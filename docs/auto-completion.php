<?php

/**
 * @property    Miaoxing\Admin\Service\AdminLogModel $adminLogModel 后台管理日志
 * @method      Miaoxing\Admin\Service\AdminLogModel adminLogModel() 返回当前对象
 */
class AdminLogModelMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminModel $adminModel
 * @method      Miaoxing\Admin\Service\AdminModel adminModel() 返回当前对象
 */
class AdminModelMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminMenu $adminNav 后台导航
 */
class AdminNavMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminPage $adminPage
 */
class AdminPageMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\Group $group 用户分组
 */
class GroupMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\GroupModel $groupModel GroupModel
 * @method      Miaoxing\Admin\Service\GroupModel groupModel() 返回当前对象
 */
class GroupModelMixin
{
}

/**
 * @mixin AdminLogModelMixin
 * @mixin AdminModelMixin
 * @mixin AdminNavMixin
 * @mixin AdminPageMixin
 * @mixin GroupMixin
 * @mixin GroupModelMixin
 */
class AutoCompletion
{
}

/**
 * @return AutoCompletion
 */
function wei()
{
    return new AutoCompletion();
}

/** @var Miaoxing\Admin\Service\AdminLogModel $adminLog */
$adminLog = wei()->adminLogModel;

/** @var Miaoxing\Admin\Service\AdminLogModel|Miaoxing\Admin\Service\AdminLogModel[] $adminLogs */
$adminLogs = wei()->adminLogModel();

/** @var Miaoxing\Admin\Service\AdminModel $admin */
$admin = wei()->adminModel;

/** @var Miaoxing\Admin\Service\AdminModel|Miaoxing\Admin\Service\AdminModel[] $admins */
$admins = wei()->adminModel();

/** @var Miaoxing\Admin\Service\AdminMenu $adminNav */
$adminNav = wei()->adminNav;

/** @var Miaoxing\Admin\Service\AdminPage $adminPage */
$adminPage = wei()->adminPage;

/** @var Miaoxing\Admin\Service\Group $group */
$group = wei()->group;

/** @var Miaoxing\Admin\Service\GroupModel $group */
$group = wei()->groupModel;

/** @var Miaoxing\Admin\Service\GroupModel|Miaoxing\Admin\Service\GroupModel[] $groups */
$groups = wei()->groupModel();
