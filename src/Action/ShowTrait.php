<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Convention;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Convention $convention
 */
trait ShowTrait
{
    public function showAction(Request $req)
    {
        if (!$req->json()) {
            return [];
        }

        $model = $this->convention->createModel($this)->findOneById($req['id']);

        return $model->toRet([
            'data' => array_merge($model->toArray(), $this->buildShowData($model)),
        ]);
    }

    /**
     * @param BaseModelV2 $model
     * @return array
     */
    protected function buildShowData(BaseModelV2 $model)
    {
        return [];
    }
}
