<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Admin\Service\Crud;
use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Crud $crud
 */
trait IndexTrait
{
    public function indexAction(Request $req)
    {
        if ($req->json()) {
            // 1. 构建查询
            $models = $this->crud->createModel($this)
                ->setRequest($req)
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

            return $models->toRet(['data' => $data]);
        }

        return get_defined_vars();
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
}
