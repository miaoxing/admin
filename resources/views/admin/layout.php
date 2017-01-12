<?php require $view->getFile('admin:admin/header.php') ?>

<?php require $view->getFile('admin:admin/navbar.php') ?>

<div class="main-container" id="main-container">
  <div class="main-container-inner">
    <?php require $view->getFile('admin:admin/aside.php') ?>
    <div class="main-content">
      <div class="page-content">
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
