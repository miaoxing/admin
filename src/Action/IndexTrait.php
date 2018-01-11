<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\Request;

trait IndexTrait
{
    public function indexAction(Request $req)
    {
        if ($req->json()) {
            $models = $this->initModel()
                ->limit($req['rows'])
                ->page($req['page'])
                ->setQueryParams($req)
                ->sort();

            if (method_exists($this, 'beforeIndexFind')) {
                $this->beforeIndexFind($req, $models);
            }

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
}
