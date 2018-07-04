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
        $file = $this->app->getDefaultTemplate(null, 'edit');
        if ($this->view->resolveFile($file)) {
            return $this->view->render($file, $vars);
        }

        return $vars;
    }

    public function createAction($req)
    {
        return $this->updateAction($req);
    }
}
