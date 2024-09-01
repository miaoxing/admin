<?php

namespace Miaoxing\Admin\Metadata;

/**
 * @property string|null $id 编号
 * @property string $parentId 上级菜单
 * @property int $level 层级
 * @property string $path 路径
 * @property string $code 标识
 * @property string $label 名称
 * @property string $url 链接
 * @property string $icon 图标
 * @property int $sort 顺序
 * @property bool $isShow 是否显示
 * @property bool $isEnabled 是否启用
 * @property array $metadata 元数据
 * @property string|null $createdAt
 * @property string|null $updatedAt
 * @property string $createdBy
 * @property string $updatedBy
 * @property string|null $deletedAt
 * @property string $deletedBy
 * @internal will change in the future
 */
trait AdminMenuTrait
{
}
