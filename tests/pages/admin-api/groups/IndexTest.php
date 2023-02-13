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
            'name' => '测试' . uniqid(),
            'sort' => 30,
        ]);

        $ret = Tester::request(['search' => ['id' => $group->id]])->getAdminApi('groups');

        $groups = GroupModel::findAll([$group->id])->load('children')->toArray();

        $this->assertSame($groups, $ret['data']);
    }

    public function testPost()
    {
        User::loginById(1);

        $name = '测试' . uniqid();
        $ret = Tester::postAdminApi('groups', [
            'id' => '1', // ignored
            'createdBy' => '2', // ignored
            'name' => $name,
            'sort' => '60',
        ]);
        $this->assertRetSuc($ret);

        /** @var GroupModel $group */
        $group = $ret['data'];
        $this->assertNotEquals('1', $group->id);
        $this->assertSame($name, $group->name);
        $this->assertSame(60, $group->sort);
        $this->assertSame('1', $group->createdBy);
    }

    public function testPostWithoutName()
    {
        User::loginById(1);

        $ret = Tester::postAdminApi('groups');
        $this->assertRetErr($ret, '名称不能为空');
    }

    public function testPostWithEmptyName()
    {
        User::loginById(1);

        $ret = Tester::postAdminApi('groups', [
            'name' => '',
            'sort' => '60',
        ]);
        $this->assertRetErr($ret, '名称不能为空');
    }
}
