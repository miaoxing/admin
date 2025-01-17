<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\App\Service\UserModel;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\MineTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Wei\Model\Relation;

/**
 * @property string|null $id
 * @property string $appId
 * @property string $userId
 * @property string|null $createdAt
 * @property string|null $updatedAt
 * @property string $createdBy
 * @property string $updatedBy
 * @property UserModel $user
 * @property string|null $id
 * @property string $appId
 * @property string $userId
 * @property string|null $createdAt
 * @property string|null $updatedAt
 * @property string $createdBy
 * @property string $updatedBy
 */
class AdminModel extends BaseModel
{
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
