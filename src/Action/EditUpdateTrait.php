<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Admin\Service\Crud;
use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Crud $crud
 */
trait EditUpdateTrait
{
    public function editAction($req)
    {
        $model = $this->crud->getModelName($this);

        $$model = $this->crud->createModel($this)->findId($req['id']);

        return get_defined_vars();
    }

    public function updateAction($req)
    {
        $model = $this->crud->createModel($this)->findId($req['id']);

        $ret = $this->beforeSave($req, $model);
        if ($ret['code'] !== 1) {
            return $ret;
        }

        $model->save($req);

        return $this->suc();
    }

    protected function beforeSave(Request $req, BaseModelV2 $model)
    {
        return $this->suc();
    }
}
