<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\Convention;
use Wei\RetTrait;

/**
 * @property Convention $convention
 */
trait DestroyTrait
{
    use RetTrait;

    public function destroyAction($req)
    {
        $model = $this->convention->createModel($this)->findOneById($req['id']);

        $model->destroy();

        return $this->suc();
    }
}
