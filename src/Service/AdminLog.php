<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Service\UserModel;

/**
 * 后台管理日志
 */
class AdminLog extends \Miaoxing\Plugin\BaseModel
{
    use ModelTrait;

    /**
     * {@inheritdoc}
     */
    protected $table = 'adminLogs';

    /**
     * 记录后台操作日志
     *
     * @param string $description
     * @param UserModel|null $user
     */
    public function log(string $description, UserModel $user = null)
    {
        wei()->adminLog()->setAppId()->save([
            'userId' => $user ? $user->id : User::id(),
            'description' => $description,
        ]);
    }
}
