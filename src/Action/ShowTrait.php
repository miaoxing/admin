<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Admin\Service\Crud;

/**
 * @property Crud $crud
 */
trait ShowTrait
{
    public function showAction($req)
    {
        $model = $this->crud->createModel($this)->findOneById($req['id']);

        return $model->toRet();
    }
}
