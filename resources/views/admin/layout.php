<?php

$wei->page->addPluginAssets('admin');
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <title>管理系统</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <?= $wei->page->renderHead() ?>
</head>
<body>
<?php require $view->getFile('@admin/admin/browser-update.php') ?>

<?= $content ?>
<div id="root"></div>

<?= $block->get('html') ?>
<script>
  var wei = <?= json_encode($js) ?>;
</script>
<?= $wei->page->renderFooter() ?>
</body>
</html>
