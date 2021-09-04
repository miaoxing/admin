<?php

namespace Miaoxing\Admin\Migration;

use Wei\Migration\BaseMigration;

class V20170113100840CreateAdminLogsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('admin_logs')
            ->id()
            ->int('app_id')
            ->uBigInt('user_id')
            ->string('description')
            ->timestamp('created_at')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('admin_logs');
    }
}
