<?php

namespace Miaoxing\Admin\Migration;

use Miaoxing\Plugin\BaseMigration;

class V20170113100840CreateAdminLogsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('adminLogs')
            ->id()
            ->int('appId')
            ->int('userId')
            ->string('description')
            ->timestamp('createTime')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('adminLogs');
    }
}
