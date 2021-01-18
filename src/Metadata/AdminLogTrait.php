<?php

namespace Miaoxing\Admin\Metadata;

use Miaoxing\Plugin\Model\ModelTrait;

/**
 * @property int $id
 * @property int $appId
 * @property int $userId
 * @property string $description
 * @property string|null $createdAt
 * @internal will change in the future
 */
trait AdminLogTrait
{
    use ModelTrait;
}
