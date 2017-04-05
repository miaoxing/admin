<?php

use miaoxing\plugin\BaseController;

/** @var BaseController $controllerInstance */
if (!$controllerInstance->getOption('displayPageHeader')) {
  return;
}
?>

<div class="page-header">
  <div class="pull-right">
    <?= $block->get('header-actions') ?>
  </div>
  <h1>
    <?= $controllerInstance->getControllerName(true) ?>
    <small>
      <i class="fa fa-angle-double-right"></i>
      <?= $controllerInstance->getActionName() ?>
    </small>
  </h1>
</div>
