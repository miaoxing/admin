<?php

namespace MiaoxingTest\Admin\Pages\AdminApi\Groups;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\Service\Tester;
use Miaoxing\Plugin\Service\User;
use Miaoxing\Plugin\Test\BaseTestCase;

class IdTest extends BaseTestCase
{
    public static function setUpBeforeClass(): void
    {
        parent::setUpBeforeClass();

        User::loginById(1);
    }

    public static function tearDownAfterClass(): void
    {
        User::logout();

        parent::tearDownAfterClass();
    }

    public function testGet()
    {
        $group = GroupModel::save([
            'name' => '测试',
        ]);

        $ret = Tester::getAdminApi('groups/' . $group->id);
        $this->assertRetSuc($ret);
        $this->assertSame('测试', $ret['data']['name']);

        $group->destroy();
        $this->expectExceptionObject(new \Exception('Record not found', 404));
        Tester::getAdminApi('groups/' . $group->id);
    }

    public function testGet404()
    {
        $this->expectExceptionObject(new \Exception('Record not found', 404));

        Tester::getAdminApi('groups/not-found');
    }

    public function testPatch()
    {
        $group = GroupModel::save();

        $ret = Tester::patchAdminApi('groups/' . $group->id, [
            'name' => '测试',
            'sort' => 60,
        ]);

        /** @var GroupModel $newGroup */
        $newGroup = $ret['data'];

        $this->assertSame($group->id, $newGroup->id);
        $this->assertNotEquals($group->name, $newGroup->name);
        $this->assertSame('测试', $newGroup->name);
        $this->assertSame(60, $newGroup->sort);
    }

    public function testDelete()
    {
        $group = GroupModel::save();

        $ret = Tester::deleteAdminApi('groups/' . $group->id);
        $this->assertRetSuc($ret);

        $group->reload();
        $this->assertTrue($group->isDeleted());
    }
}
