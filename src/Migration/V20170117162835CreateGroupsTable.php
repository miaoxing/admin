<?php

namespace Miaoxing\Admin\Migration;

use Wei\Migration\BaseMigration;

class V20170117162835CreateGroupsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('groups')->tableComment('用户分组')
            ->id()
            ->string('name', 64)
            ->uInt('sort')->defaults(50)
            ->uTinyInt('status')
            ->timestamps()
            ->userstamps()
            ->softDeletable()
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('groups');
    }
}
