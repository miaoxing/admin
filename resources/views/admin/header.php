<?php

$wei->page->addPluginAssets('admin', true);
?>
<!DOCTYPE html>
<!-- htmllint tag-close="false" -->
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <?= $wei->page->renderHead() ?>
</head>
<body>
<!-- htmllint tag-close="$previous" -->
<?php require $view->getFile('@admin/admin/browser-update.php') ?>
