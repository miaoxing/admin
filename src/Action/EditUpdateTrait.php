<?php

namespace Miaoxing\Admin\Action;

trait EditUpdateTrait
{
    public function editAction($req)
    {
        $model = $this->getModelName();

        $$model = $this->initModel()->findId($req['id']);

        return get_defined_vars();
    }

    public function updateAction($req)
    {
        $model = $this->initModel()->findId($req['id']);

        if (method_exists($this, 'beforeSave')) {
            $ret = $this->beforeSave($req, $model);
            if ($ret['code'] !== 1) {
                return $ret;
            }
        }

        $model->save($req);

        return $this->suc();
    }
}
