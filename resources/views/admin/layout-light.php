<?php require $view->getFile('admin:admin/header.php') ?>

<div class="main-container main-container-light" id="main-container">
  <div class="main-container-inner">
    <div class="main-content">
      <div class="page-content page-content-light">
        <div class="text-center m-a-md logo-container">
          <?php if ($logoUrl = $setting('app.logo')) : ?>
            <img class="page-logo" src="<?= $logoUrl ?>">
          <?php else : ?>
            <?php require $view->getFile('admin:admin/logo.php') ?>
          <?php endif ?>
        </div>

        <?= $content ?>
      </div>
      <!-- /.page-content -->
    </div>
    <!-- /.main-content -->
  </div>
  <!-- /.main-container-inner -->
  <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
    <i class="fa fa-angle-double-up"></i>
  </a>
</div>
<!-- /.main-container -->

<?php require $view->getFile('admin:admin/footer.php') ?>
