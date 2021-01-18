<?php

/**
 * @property    Miaoxing\Admin\Service\AdminLogModel $adminLogModel 后台管理日志
 * @method      Miaoxing\Admin\Service\AdminLogModel adminLogModel()
 */
class AdminLogModelMixin {
}

/**
 * @property    Miaoxing\Admin\Service\AdminModel $adminModel
 * @method      Miaoxing\Admin\Service\AdminModel adminModel()
 */
class AdminModelMixin {
}

/**
 * @property    Miaoxing\Admin\Service\AdminNav $adminNav 后台导航
 */
class AdminNavMixin {
}

/**
 * @property    Miaoxing\Admin\Service\Group $group 用户分组
 */
class GroupMixin {
}

/**
 * @property    Miaoxing\Admin\Service\GroupModel $groupModel GroupModel
 * @method      Miaoxing\Admin\Service\GroupModel groupModel()
 */
class GroupModelMixin {
}

/**
 * @mixin AdminLogModelMixin
 * @mixin AdminModelMixin
 * @mixin AdminNavMixin
 * @mixin GroupMixin
 * @mixin GroupModelMixin
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

/** @var Miaoxing\Admin\Service\AdminLogModel $adminLogModel */
$adminLog = wei()->adminLogModel();

/** @var Miaoxing\Admin\Service\AdminLogModel|Miaoxing\Admin\Service\AdminLogModel[] $adminLogModels */
$adminLogs = wei()->adminLogModel();

/** @var Miaoxing\Admin\Service\AdminModel $adminModel */
$admin = wei()->adminModel();

/** @var Miaoxing\Admin\Service\AdminModel|Miaoxing\Admin\Service\AdminModel[] $adminModels */
$admins = wei()->adminModel();

/** @var Miaoxing\Admin\Service\AdminNav $adminNav */
$adminNav = wei()->adminNav;

/** @var Miaoxing\Admin\Service\Group $group */
$group = wei()->group;

/** @var Miaoxing\Admin\Service\GroupModel $groupModel */
$group = wei()->groupModel();

/** @var Miaoxing\Admin\Service\GroupModel|Miaoxing\Admin\Service\GroupModel[] $groupModels */
$groups = wei()->groupModel();
