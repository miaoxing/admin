<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\Convention;
use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Convention $convention
 */
trait IndexTrait
{
    public function indexAction(Request $req)
    {
        if ($req->json() || $req->csv()) {
            // 1. 构建查询
            if (method_exists($this, 'createModel')) {
                $models = $this->createModel();
            } else {
                $models = $this->convention->createModel($this);
            }
            $models->setRequest($req)
                ->paginate()
                ->sort();

            $this->beforeIndexFind($req, $models);
            $models->findAll();
            $this->afterIndexFind($req, $models);

            // 2. 组装返回数据
            $data = [];
            /** @var BaseModelV2 $model */
            foreach ($models as $model) {
                $data[] = array_merge($model->toArray(), $this->buildIndexData($model));
            }

            return $this->buildIndexRet($models->toRet(['data' => $data]), $req, $models);
        }

        $this->beforeViewRender();
        return get_defined_vars();
    }

    protected function beforeViewRender()
    {
        // do nothing.
    }

    /**
     * @param Request $req
     * @param BaseModelV2|BaseModelV2[] $models
     */
    protected function beforeIndexFind(Request $req, BaseModelV2 $models)
    {
        // do nothing.
    }

    /**
     * @param Request $req
     * @param BaseModelV2|BaseModelV2[] $models
     */
    protected function afterIndexFind(Request $req, BaseModelV2 $models)
    {
        // do nothing.
    }

    /**
     * @param BaseModelV2 $model
     * @return array
     */
    protected function buildIndexData(BaseModelV2 $model)
    {
        return [];
    }

    protected function buildIndexRet($ret, Request $req, BaseModelV2 $models)
    {
        return $ret;
    }
}
