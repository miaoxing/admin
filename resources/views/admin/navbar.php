<nav class="navbar navbar-default">
  <div class="container-fluid">
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
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <?php if (wei()->setting('admin.navBarEnableUpdateUserInfo')) : ?>
              <li>
                <a href="<?= $url('admin/admins/edit-self') ?>">
                  <i class="fa fa-user"></i>
                  修改资料
                </a>
              </li>
            <?php endif ?>

            <li>
              <a href="<?= $url('admin/password') ?>">
                <i class="fa fa-lock"></i>
                修改密码
              </a>
            </li>

            <li>
              <a href="<?= $url('users/logout') ?>">
                <i class="fa fa-power-off"></i>
                退出
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <img class="nav-user-photo" src="<?= $e($curUser->getHeadImg()) ?>" alt="<?= $e($curUser->getNickName()) ?>" />
    </div>
  </div>
</nav>
