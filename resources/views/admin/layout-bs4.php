<?php

$wei->page->addPluginAssets('admin');
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <?= $wei->page->renderHead() ?>
</head>
<body>
<?php require $view->getFile('@admin/admin/browser-update.php') ?>
<?php require $view->getFile('@admin/admin/navbar-bs4.php') ?>
<div class="main-container" id="main-container">
  <div class="main-container-inner">
    <?php require $view->getFile('@admin/admin/aside.php') ?>
    <div class="main-content">
      <div class="page-content">
        <?= $content ?>
        <div id="root"></div>
      </div>
    </div>
  </div>
</div>
<script>
  var wei = <?= json_encode($js) ?>;
</script>
<?= $wei->page->renderFooter() ?>
</body>
</html>
