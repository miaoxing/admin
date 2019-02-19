<?php if ($loginBg = $setting('admin.loginBg')) : ?>
  <?= $block->css() ?>
  <!-- htmllint tag-bans="false" -->
  <style>
    .main-container-light:before {
      background-image: url(<?= $e($loginBg) ?>);
    }
  </style>
  <!-- htmllint tag-bans="$previous" -->
  <?= $block->end() ?>
<?php endif ?>

<?php require $view->getFile('@admin/admin/header.php') ?>

<div class="alert alert-warning text-center px-0 text-lg d-block d-sm-none">
  为了确保您更好的使用体验，请在电脑端登录
</div>

<div class="main-container main-container-light" id="main-container">
  <div class="main-container-inner">
    <div class="main-content">
      <div class="page-content page-content-light">
        <div class="text-center m-4 logo-container">
          <?php if ($logoUrl = $setting('app.logo')) : ?>
            <img class="page-logo" src="<?= $logoUrl ?>">
          <?php else : ?>
            <?php require $view->getFile('@admin/admin/logo.php') ?>
          <?php endif ?>
        </div>

        <?= $content ?>
        <div id="root"></div>
      </div>
      <!-- /.page-content -->
    </div>
    <!-- /.main-content -->
  </div>
  <!-- /.main-container-inner -->
  <a href="#" class="js-btn-scroll-up btn-scroll-up btn btn-sm btn-inverse">
    <i class="fa fa-angle-double-up"></i>
  </a>
</div>
<!-- /.main-container -->

<?php require $view->getFile('@admin/admin/footer.php') ?>
