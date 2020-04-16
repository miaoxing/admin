<?php

namespace Miaoxing\Admin\Migration;

use Miaoxing\Services\Migration\BaseMigration;

class V20161103140841CreateUserLogsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('userLogs')
            ->id()
            ->int('appId')
            ->int('userId')
            ->string('nickName', 32)
            ->string('page', 64)
            ->string('action', 16)
            ->string('param', 64)
            ->string('ret', 64)
            ->string('oldValue', 64)
            ->string('newValue', 64)
            ->timestamp('confirmTime')
            ->int('confirmUser')
            ->timestampsV1()
            ->int('updateUser')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('userLogs');
    }
}