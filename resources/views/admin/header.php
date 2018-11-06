<!DOCTYPE html>
<!-- htmllint tag-close="false" -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?= $asset([
    'comps/bootstrap/dist/css/bootstrap.min.css',
    'comps/jasny-bootstrap/dist/css/jasny-bootstrap.min.css',
    'comps/font-awesome/css/font-awesome.min.css',
    'comps/jquery-ui-custom/jquery-ui-1.10.3.full.min.css',
    'plugins/admin/css/layout.css',
    'plugins/admin/css/utilities.css',
    'plugins/admin/css/components.css',
    'plugins/admin/css/theme.css',
    'plugins/app/css/tips.css',
  ]) ?>">
  <?= $wei->page->renderHead() ?>
  <style>
    .table td {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  </style>
</head>
<body>
<!-- htmllint tag-close="$previous" -->
<?php require $view->getFile('@admin/admin/browser-update.php') ?>
