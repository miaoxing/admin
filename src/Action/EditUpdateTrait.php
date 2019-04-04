<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\BaseModelV2;
use Miaoxing\Plugin\Service\Convention;
use Miaoxing\Plugin\Service\Request;

/**
 * @property Convention $convention
 */
trait EditUpdateTrait
{
    public function editAction(Request $req)
    {
        $model = $this->convention->getModelName($this);

        $$model = $this->convention->createModel($this)->findId($req['id']);

        if ($req->json()) {
            return $$model->toRet();
        } else {
            $this->js[$model] = $$model;
            return get_defined_vars();
        }
    }

    public function updateAction($req)
    {
        $model = $this->convention->createModel($this)->findId($req['id'])->fromArray($req);

        $ret = $this->beforeSave($req, $model);
        if ($ret['code'] !== 1) {
            return $ret;
        }

        $model->save();

        return $this->suc();
    }

    protected function beforeSave(Request $req, BaseModelV2 $model)
    {
        return $this->suc();
    }
}
