<?php

namespace MiaoxingTest\Admin\Pages\Api\Admin\Groups\Defaults;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\Service\Tester;
use Miaoxing\Plugin\Test\BaseTestCase;

class IndexTest extends BaseTestCase
{
    public function testGet()
    {
        $ret = Tester::getAdminApi('groups/defaults');
        $this->assertRetSuc($ret);
        $this->assertInstanceOf(GroupModel::class, $ret['data']);
    }
}
