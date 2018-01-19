<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\Convention;

/**
 * @property Convention $convention
 */
trait ShowTrait
{
    public function showAction($req)
    {
        $model = $this->convention->createModel($this)->findOneById($req['id']);

        return $model->toRet();
    }
}
