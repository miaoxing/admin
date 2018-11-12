<?php

wei()->wpAsset->addRevFile('dist2/admin-v1-assets-hash.json');
?>
<!DOCTYPE html>
<!-- htmllint tag-close="false" -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="<?= $this->wpAsset('admin-v1.css') ?>"/>
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
