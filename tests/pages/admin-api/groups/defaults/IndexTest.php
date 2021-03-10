<?php

namespace MiaoxingTest\Admin\Pages\AdminApi\Groups\Defaults;

use Miaoxing\Admin\Service\GroupModel;
use Miaoxing\Plugin\Test\BaseTestCase;
use Miaoxing\Plugin\Service\Tester;

class IndexTest extends BaseTestCase
{
    public function testGet()
    {
        $ret = Tester::getAdminApi('groups/defaults');
        $this->assertRetSuc($ret);
        $this->assertInstanceOf(GroupModel::class, $ret['data']);
    }
}