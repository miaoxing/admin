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
          placeholder="用户名/邮箱" required />
      </div>

      <div class="form-group">
        <label for="password">
          密码
        </label>
        <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码"
          data-rule-required="true">
      </div>

      <?php if (wei()->setting('user.enableLoginCaptcha')) : ?>
      <div class="form-group">
        <label for="captcha">
          验证码
        </label>
        <div class="input-group">
          <input type="text" class="form-control" id="captcha" name="captcha" placeholder="请输入验证码"
            data-rule-required="true">
            <span class="input-group-addon p-a-0">
              <img class="js-captcha" src="<?= $url('captcha') ?>">
            </span>
        </div>
      </div>
      <?php endif ?>

      <div class="form-group">
        <div class="error-message text-danger text-center">
          <?= $e($req['message']) ?>
        </div>
      </div>

      <div class="form-group">
        <div class="text-primary">
          <a href="<?= $url('registration/forget') ?>">忘记密码</a>
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
        没有账号，点击<a href="<?= $url('registration/register') ?>">注册</a>

      </div>
    <?php endif ?>
  </div>
</div>

<?= $block('js') ?>
<script>
  require(['plugins/user/js/users', 'jquery-form'], function (user) {
    user.loginAction();

    var $captcha = $('.js-captcha');
    $captcha.click(changeCaptcha);

    var src = $captcha.attr('src');
    function changeCaptcha () {
      $captcha.attr('src', src + '?t=' + new Date());
    }
  });
</script>
<?= $block->end() ?>
