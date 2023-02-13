<?php

/**
 * @property    Miaoxing\Admin\Service\AdminLogModel $adminLogModel 后台管理日志
 */
class AdminLogModelMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminLogModel $adminLogModel 后台管理日志
 */
class AdminLogModelPropMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminMenu $adminMenu 后台菜单
 */
class AdminMenuMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminMenu $adminMenu 后台菜单
 */
class AdminMenuPropMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminModel $adminModel
 */
class AdminModelMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminModel $adminModel
 */
class AdminModelPropMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminPage $adminPage
 */
class AdminPageMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\AdminPage $adminPage
 */
class AdminPagePropMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\Group $group 用户分组
 */
class GroupMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\Group $group 用户分组
 */
class GroupPropMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\GroupModel $groupModel GroupModel
 */
class GroupModelMixin
{
}

/**
 * @property    Miaoxing\Admin\Service\GroupModel $groupModel GroupModel
 */
class GroupModelPropMixin
{
}

/**
 * @mixin AdminLogModelMixin
 * @mixin AdminMenuMixin
 * @mixin AdminModelMixin
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
