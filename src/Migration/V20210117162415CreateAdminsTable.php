<?php

namespace Miaoxing\Admin\Migration;

use Wei\Migration\BaseMigration;

class V20210117162415CreateAdminsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('admins')
            ->id()
            ->uInt('app_id')
            ->uInt('user_id')
            ->timestamps()
            ->userstamps()
            ->index('user_id')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('admins');
    }
}
