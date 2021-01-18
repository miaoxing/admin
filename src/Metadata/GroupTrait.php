<?php

namespace Miaoxing\Admin\Metadata;

use Miaoxing\Plugin\Model\ModelTrait;

/**
 * @property int $id
 * @property string $name
 * @property int $sort
 * @property int $status
 * @property string|null $createdAt
 * @property string|null $updatedAt
 * @property int $createdBy
 * @property int $updatedBy
 * @property string|null $deletedAt
 * @property int $deletedBy
 * @internal will change in the future
 */
trait GroupTrait
{
    use ModelTrait;
}
