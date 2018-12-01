<?php

wei()->wpAsset->addRevFile('dist2/admin-bs4-assets-hash.json');
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
  <link rel="stylesheet" href="<?= $this->wpAsset('admin-bs4.css') ?>"/>
  <?= $wei->page->renderHead() ?>
</head>
<body>
<!-- htmllint tag-close="$previous" -->
<?php require $view->getFile('@admin/admin/browser-update.php') ?>

<?php require $view->getFile('@admin/admin/navbar-bs4.php') ?>

<div class="main-container" id="main-container">
  <div class="main-container-inner">
    <?php require $view->getFile('@admin/admin/aside.php') ?>
    <div class="main-content">
      <div class="page-content">
        <?php require $view->getFile('@admin/admin/page-header.php') ?>
        <?= $content ?>
        <div id="root"></div>
      </div>
      <!-- /.page-content -->
    </div>
    <!-- /.main-content -->
  </div>
</div>
<!-- /.main-container -->

<?= $block->get('html') ?>
<script>
  var wei = <?= json_encode($js) ?>;
</script>
<script src="<?= $this->wpAsset('admin-bs4.js') ?>"></script>
<?= $wei->page->renderFooter() ?>
</body>
</html>

