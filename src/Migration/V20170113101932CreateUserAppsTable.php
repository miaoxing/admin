<?php

namespace Miaoxing\Admin\Migration;

use Miaoxing\Plugin\BaseMigration;

class V20170113101932CreateUserAppsTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('userApps')
            ->id()
            ->int('appId')
            ->int('userId')
            ->timestamp('createTime')
            ->int('createUser')
            ->exec();
    }

    /**
     * {@inheritdoc}
     */
    public function down()
    {
        $this->schema->dropIfExists('userApps');
    }
}
