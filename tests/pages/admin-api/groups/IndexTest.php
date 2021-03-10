<?php

namespace MiaoxingTest\Admin\Pages\AdminApi\Groups;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\Service\Tester;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Test\BaseTestCase;

class IndexTest extends BaseTestCase
{
    public function testGet()
    {
        User::loginById(1);

        $group = GroupModel::save([
            'name' => '测试',
            'sort' => 30,
        ]);

        $ret = Tester::request(['search' => ['id' => $group->id]])->getAdminApi('groups');

        $groups = GroupModel::findAll([$group->id])->toArray();

        $this->assertSame($groups, $ret['data']);
    }

    public function testPost()
    {
        User::loginById(1);

        $ret = Tester::postAdminApi('groups', [
            'id' => '1', // ignored
            'createdBy' => '2', // ignored
            'name' => '测试',
            'sort' => '60',
        ]);
        $this->assertRetSuc($ret);

        /** @var GroupModel $group */
        $group = $ret['data'];
        $this->assertNotEquals('1', $group->id);
        $this->assertSame('测试', $group->name);
        $this->assertSame(60, $group->sort);
        $this->assertSame(1, $group->createdBy);
    }
}
