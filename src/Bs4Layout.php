<?php

namespace Miaoxing\Admin;

use Miaoxing\Plugin\Service\App;
use Miaoxing\Plugin\Service\View;

/**
 * @property View $view
 * @property App $app
 */
trait Bs4Layout
{
    public function __construct(array $options = [])
    {
        parent::__construct($options);

        $this->view->setDefaultLayout('@admin/admin/layout-bs4.php');
        $this->app->setDefaultViewFile('@app/_default-bs4.php');
    }
}
