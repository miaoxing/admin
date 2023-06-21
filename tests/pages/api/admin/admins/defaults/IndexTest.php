<?php

namespace MiaoxingTest\Admin\Pages\Api\Admin\Admins\Defaults;

use Miaoxing\Plugin\Service\Tester;
use Miaoxing\Plugin\Service\UserModel;
use Miaoxing\Plugin\Test\BaseTestCase;

class IndexTest extends BaseTestCase
{
    public function testGet()
    {
        $ret = Tester::getAdminApi('admins/defaults');
        $this->assertInstanceOf(UserModel::class, $ret['data']['user']);
    }
}
