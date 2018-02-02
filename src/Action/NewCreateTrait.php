<?php

namespace Miaoxing\Admin\Action;

use Miaoxing\Plugin\Service\App;
use Wei\View;

/**
 * @property App $app
 * @property View $view
 */
trait NewCreateTrait
{
    public function newAction($req)
    {
        $vars = $this->editAction($req);
        $name = $this->app->getDefaultTemplate(null, 'edit');

        return $this->view->render($name, $vars);
    }

    public function createAction($req)
    {
        return $this->updateAction($req);
    }
}
