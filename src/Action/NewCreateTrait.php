<?php

namespace Miaoxing\Admin\Action;

trait NewCreateTrait
{
    public function newAction($req)
    {
        return $this->editAction($req);
    }

    public function createAction($req)
    {
        return $this->updateAction($req);
    }
}
