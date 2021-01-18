<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminLogTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;

/**
 * 后台管理日志
 */
class AdminLogModel extends BaseModel
{
    use ModelTrait;
    use AdminLogTrait;
    use HasAppIdTrait;

    /**
     * 记录后台操作日志
     *
     * @param string $description
     * @param UserModel|null $user
     * @svc
     */
    protected function log(string $description, UserModel $user = null)
    {
        $this->saveAttributes([
            'userId' => $user ? $user->id : User::id(),
            'description' => $description,
        ]);
    }
}
