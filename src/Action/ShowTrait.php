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

        if (method_exists($this, 'createModel')) {
            $model = $this->createModel();
        } else {
            $model = $this->convention->createModel($this);
        }

        $this->beforeShowFind($req, $model);
        $model = $model->findOneById($req['id']);

        return $model->toRet([
            'data' => array_merge($model->toArray(), $this->buildShowData($model)),
        ]);
    }

    /**
     * @param Request $req
     * @param BaseModelV2 $model
     */
    protected function beforeShowFind(Request $req, BaseModelV2 $model)
    {
        // do nothing.
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
