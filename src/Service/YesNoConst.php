<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\BaseService;
use Miaoxing\Plugin\Constant;

/**
 * 是否常量服务
 */
class YesNoConst extends BaseService
{
    use Constant;

    const YES_NO_YES = 1;

    const YES_NO_NO = 0;

    protected $yesNoTable = [
        self::YES_NO_YES => [
            'label' => '是',
        ],
        self::YES_NO_NO => [
            'label' => '否',
        ],
    ];

    public function getLabel($id)
    {
        return $this->getConstantLabel('yes_no', $id);
    }
}
