<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".sidebar" aria-expanded="false">
    <i class="fa fa-caret-down"></i>
  </button>
  <?php require $view->getFile('@admin/admin/logo.php') ?>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
    aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars"></i>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <?= $wei->adminNav->renderNav() ?>
    </ul>

    <div class="dropdown">
      <a class="dropdown-toggle d-flex align-items-center text-body" href="javascript:;" role="button"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img class="navbar-avatar" src="<?= $e($curUser->getHeadImg()) ?>" alt="<?= $e($curUser->getNickName()) ?>"/>
        <small><?= $e($curUser->getNickName()) ?></small>
      </a>
      <div class="dropdown-menu dropdown-menu-lg-right">
        <?php if (wei()->setting('admin.navBarEnableUpdateUserInfo')) : ?>
          <a class="dropdown-item" href="<?= $url('admin/admins/edit-self') ?>">
            <i class="fa fa-user"></i>
            修改资料
          </a>
        <?php endif ?>
        <a class="dropdown-item" href="<?= $url('admin/password') ?>">
          <i class="fa fa-lock"></i>
          修改密码
        </a>
        <a class="dropdown-item" href="<?= $url('users/logout') ?>">
          <i class="fa fa-power-off"></i>
          退出
        </a>
      </div>
    </div>
  </div>
</nav>
