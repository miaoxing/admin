<?php

$view->layout('admin:admin/layout-light.php')
?>

<div class="page-header">
  <h1 class="page-title-light">
    <?= $setting('login.title', '登录') ?>
  </h1>
</div>

<div class="row">
  <div class="col-xs-12">

    <form class="js-login-form m-b-md" role="form" method="post" action="<?= $url('users/login') ?>">

      <div class="form-group">
        <label for="email">
          帐号
        </label>
        <input name="username" type="text" value="<?= $e->attr($req['username']) ?>" class="form-control"
          placeholder="用户名/邮箱" />
      </div>

      <div class="form-group">
        <label for="password">
          密码
        </label>
        <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码">
      </div>

      <div class="form-group">
        <div class="error-message text-danger text-center">
          <?= $e($req['message']) ?>
        </div>
      </div>

      <div class="clearfix form-group m-t-md">
        <button class="btn btn-primary btn-block btn-lg" type="submit">
          登录
        </button>
      </div>
    </form>
    <?php if ($setting('admin.enableRegister')) : ?>
      <hr>
      <div class="m-t text-center">
        没有账号，点击<a href="<?= $url('registration/register') ?>">注册</a>，
        <a href="<?= $url('registration/forget') ?>">忘记密码</a>
      </div>
    <?php endif ?>
  </div>
</div>

<?= $block('js') ?>
<script>
  require(['plugins/user/js/users', 'jquery-form'], function (user) {
    user.loginAction();
  });
</script>
<?= $block->end() ?>
