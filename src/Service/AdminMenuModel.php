<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminMenuTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Wei\Model\SoftDeleteTrait;
use Wei\Model\TreeTrait;

class AdminMenuModel extends BaseModel
{
    use ModelTrait;
    use AdminMenuTrait;
    use SnowflakeTrait;
    use ReqQueryTrait;
    use TreeTrait;
    use SoftDeleteTrait;

    protected $columns = [
        'metadata' => [
            'default' => [],
        ],
    ];

    protected $parentIdColumn = 'parentId';
}
