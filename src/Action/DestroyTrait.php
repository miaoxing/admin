<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Admin\Service\Crud;
use Wei\RetTrait;

/**
 * @property Crud $crud
 */
trait DestroyTrait
{
    use RetTrait;

    public function destroyAction($req)
    {
        $model = $this->crud->createModel($this)->findOneById($req['id']);

        $model->destroy();

        return $this->suc();
    }
}
