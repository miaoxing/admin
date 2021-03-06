<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\Attributes\Relation;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
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

    /**
     * @Relation
     */
    #[Relation]
    public function user()
    {
        return $this->belongsTo(UserModel::class);
    }
}
