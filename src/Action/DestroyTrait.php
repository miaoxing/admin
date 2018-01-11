<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\BaseModelV2;
use Wei\RetTrait;

trait DestroyTrait
{
    use RetTrait;
    use GetModelNameTrait;

    public function destroyAction($req)
    {
        $model = $this->initModel()->findOneById($req['id']);

        $model->destroy();

        return $this->suc();
    }
}
