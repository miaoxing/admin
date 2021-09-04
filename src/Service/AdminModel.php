<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\Attributes\Relation;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Miaoxing\Plugin\Service\UserModel;

/**
 * @property UserModel $user
 */
class AdminModel extends BaseModel
{
    use AdminTrait;
    use HasAppIdTrait;
    use ModelTrait;
    use ReqQueryTrait;
    use SnowflakeTrait;

    /**
     * @Relation
     */
    #[Relation]
    public function user(): UserModel
    {
        return $this->belongsTo(UserModel::class);
    }
}
