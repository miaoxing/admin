<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Convention;
use Miaoxing\Plugin\Service\Request;
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

        $ret = $this->beforeDestroy($req, $model);
        if ($ret['code'] !== 1) {
            return $ret;
        }

        $model->destroy();

        return $this->suc();
    }

    protected function beforeDestroy(Request $req, BaseModelV2 $model)
    {
        return $this->suc();
    }
}
