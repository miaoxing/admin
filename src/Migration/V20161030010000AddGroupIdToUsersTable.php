<?php

namespace Miaoxing\Admin\Migration;

use Miaoxing\Services\Migration\BaseMigration;

class V20161030010000AddGroupIdToUsersTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('users')
            ->int('group_id')->comment('用户组')->after('out_id')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->table('users')
            ->dropColumn('group_id')
            ->exec();
    }
}
