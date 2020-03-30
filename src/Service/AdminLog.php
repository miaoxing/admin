<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\Service\UserModel;

/**
 * 后台管理日志
 */
class AdminLog extends \Miaoxing\Plugin\BaseModel
{
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
            'userId' => $user ? $user['id'] : wei()->curUser['id'],
            'description' => $description,
        ]);
    }
}
