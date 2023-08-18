<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminTrait;
use Miaoxing\App\Service\UserModel;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\MineTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Wei\Model\Relation;

/**
 * @property UserModel $user
 */
class AdminModel extends BaseModel
{
    use AdminTrait;
    use HasAppIdTrait;
    use MineTrait;
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
