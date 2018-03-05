<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\Convention;
use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Convention $convention
 */
trait EditUpdateTrait
{
    public function editAction($req)
    {
        $model = $this->convention->getModelName($this);

        $$model = $this->convention->createModel($this)->findId($req['id']);
        $this->js[$model] = $$model;

        return get_defined_vars();
    }

    public function updateAction($req)
    {
        $model = $this->convention->createModel($this)->findId($req['id']);

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
