<style>
  .navbar-toggler {
    padding: 7px 10px;
    width: 40px;
    height: 35px;
    font-size: 22px;
    margin-left: 15px;
  }
  .navbar-toggler.ml-auto {
    margin-right: 15px;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light p-0">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".sidebar"
    aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-caret-down"></i>
  </button>
  <?php require $view->getFile('@admin/admin/logo.php') ?>
  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar-toggler"
    aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbar-toggler">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <?= $wei->adminNav->renderNav() ?>
    </ul>

    <img class="nav-user-photo" src="<?= $e($curUser->getHeadImg()) ?>" alt="<?= $e($curUser->getNickName()) ?>"/>
    <ul class="nav navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbar-dropdown-menu-link" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <small><?= $e($curUser->getNickName()) ?> - 设置</small>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-menu-link">
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
      </li>
    </ul>
  </div>
</nav>
