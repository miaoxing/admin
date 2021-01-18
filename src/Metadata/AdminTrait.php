<?php

namespace Miaoxing\Admin\Metadata;

use Miaoxing\Plugin\Model\ModelTrait;

/**
 * @property int $id
 * @property int $userId
 * @property string|null $createdAt
 * @property string|null $updatedAt
 * @property int $createdBy
 * @property int $updatedBy
 * @internal will change in the future
 */
trait AdminTrait
{
    use ModelTrait;
}
