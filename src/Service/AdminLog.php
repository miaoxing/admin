<?php

namespace Miaoxing\Admin\Service;

/**
 * 后台管理日志
 */
class AdminLog extends \miaoxing\plugin\BaseModel
{
    /**
     * {@inheritdoc}
     */
    protected $table = 'adminLogs';

    /**
     * {@inheritdoc}
     */
    protected $providers = [
        'db' => 'app.db',
    ];

    /**
     * 记录后台操作日志
     * @param $description
     * @param \Miaoxing\Plugin\Service\User $user
     */
    public function log($description, \Miaoxing\Plugin\Service\User $user = null)
    {
        wei()->adminLog()->setAppId()->save([
            'userId' => $user ? $user['id'] : wei()->curUser['id'],
            'description' => $description,
        ]);
    }
}
