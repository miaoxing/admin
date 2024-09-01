<?php

namespace Miaoxing\Admin\Migration;

use Wei\Migration\BaseMigration;

class V20240724182002CreateAdminMenusTable extends BaseMigration
{
    /**
     * {@inheritdoc}
     */
    public function up()
    {
        $this->schema->table('admin_menus')->tableComment('后台菜单')
            ->bigId()->comment('编号')
            ->uBigInt('parent_id')->comment('上级菜单')
            ->smallInt('level')->comment('层级')
            ->string('path')->comment('路径')
            ->string('code')->comment('标识')
            ->string('label')->comment('名称')
            ->string('url')->comment('链接')
            ->string('icon', 8192)->comment('图标')
            ->smallInt('sort')->comment('顺序')->defaults(50)
            ->bool('is_show')->comment('是否显示')->defaults(true)
            ->bool('is_enabled')->comment('是否启用')->defaults(true)
            ->json('metadata')->comment('元数据')
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
        $this->schema->dropIfExists('admin_menus');
    }
}
