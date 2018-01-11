<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\BaseModelV2;

trait GetModelNameTrait
{
    protected function getModelName()
    {
        // 适合类名: Miaoxing\Plugin\Service\User
        $parts = explode('\\', get_class());
        $basename = lcfirst(end($parts));

        // TODO 复数转单数
        $name = rtrim($basename, 's');

        return $name;
    }

    /**
     * @return BaseModelV2
     */
    protected function initModel()
    {
        return $this->{$this->getModelName() . 'Model'}();
    }
}
