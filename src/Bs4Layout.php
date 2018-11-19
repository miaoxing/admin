<?php

namespace Miaoxing\Admin;

trait Bs4Layout
{
    public function __construct(array $options = [])
    {
        parent::__construct($options);

        $this->view->setDefaultLayout('@admin/admin/layout-bs4.php');
    }
}
