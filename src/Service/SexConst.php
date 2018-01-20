<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\BaseService;
use Miaoxing\Plugin\ConstTrait;

/**
 * 性别常量服务
 */
class SexConst extends BaseService
{
    use ConstTrait;

    const SEX_MALE = 1;

    const SEX_FEMALE = 2;

    protected $sexTable = [
        self::SEX_MALE => [
            'label' => '男',
        ],
        self::SEX_FEMALE => [
            'label' => '女',
        ],
    ];

    public function getLabel($id)
    {
        return $this->getConstLabel('sex', $id);
    }
}
