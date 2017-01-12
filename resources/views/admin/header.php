<!DOCTYPE html>
<html lang="en">
<head>
  <?php $event->trigger('head') ?>
  <meta charset="utf-8"/>
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="renderer" content="webkit">
  <link rel="stylesheet" href="<?= $asset([
    'comps/bootstrap/dist/css/bootstrap.min.css',
    'comps/jasny-bootstrap/dist/css/jasny-bootstrap.min.css',
    'comps/font-awesome-mx/css/font-awesome.min.css',
    'comps/jquery-ui-custom/jquery-ui-1.10.3.full.min.css',
    'plugins/admin/css/layout.css',
    'plugins/admin/css/utilities.css',
    'plugins/admin/css/components.css',
    'plugins/admin/css/theme.css',
    'assets/tips.css',
  ]) ?>"/>
  <?= $block->get('css') ?>
  <?php $event->trigger('afterStyle') ?>
  <?php $event->trigger('appendHead') ?>
</head>
<body>
