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
            $models = $this->crud->createModel($this)
                ->limit($req['rows'])
                ->page($req['page'])
                ->setRequest($req)
                ->sort();

            $this->beforeIndexFind($req, $models);

            $models->findAll();

            return $this->suc([
                'data' => $models,
                'page' => (int) $req['page'],
                'rows' => (int) $req['rows'],
                'records' => $models->count(),
            ]);
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
}
