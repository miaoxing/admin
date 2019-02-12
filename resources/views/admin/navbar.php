<style>
  .navbar .navbar-toggle.collapsed {
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }
  .navbar-toggle .fa {
    color: #333;
  }
</style>
<nav class="navbar navbar-default">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target=".sidebar"
        aria-expanded="false">
        <i class="fa fa-caret-down"></i>
      </button>
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse"
        aria-expanded="false">
        <i class="fa fa-bars"></i>
      </button>
      <?php require $view->getFile('@admin/admin/logo.php') ?>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <?= $wei->adminNav->renderNav() ?>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="javascript:" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">
            <small><?= $e($curUser->getNickName()) ?> - 设置</small>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
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
          </ul>
        </li>
      </ul>

      <img class="nav-user-photo" src="<?= $e($curUser->getHeadImg()) ?>" alt="<?= $e($curUser->getNickName()) ?>" />
    </div>
</nav>
