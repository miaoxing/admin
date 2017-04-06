<?php $view->layout() ?>

<div class="page-header">
  <a class="btn btn-default pull-right" href="<?= $url('admin/admin/index') ?>">返回列表</a>

  <h1>
    管理员管理
    <small>
      <i class="fa fa-angle-double-right"></i>
      <?= $user->isNew() ? '添加' : '编辑' ?>用户
    </small>
  </h1>
</div>
<!-- /.page-header -->

<div class="row">
  <div class="col-xs-12">
    <!-- PAGE CONTENT BEGINS -->
    <form id="record-form" class="form-horizontal" action="<?= $url('admin/admin/' . ($user->getFormAction())) ?>"
      method="post" role="form">

      <div class="form-group">
        <label class="col-lg-2 control-label" for="username">
          <span class="text-warning">*</span>
          用户名
        </label>

        <div class="col-lg-4">
          <?php if ($user->isNew()) : ?>
            <input type="text" class="form-control" name="username" id="username">
          <?php else : ?>
            <p class="username form-control-static"></p>
          <?php endif; ?>
        </div>
      </div>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="group-id">
          <span class="text-warning">*</span>
          用户组
        </label>

        <div class="col-lg-4">
          <select id="group-id" name="groupId" class="form-control">
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="head-img">
          头像
        </label>

        <div class="col-lg-4">
          <div class="input-group js-upload-container">
            <input type="file" class="js-image-upload"/>
            <input type="hidden" id="head-img" class="js-image-url" name="headImg"/>
          </div>
        </div>

        <div class="col-lg-4">
          <label class="help-text" for="head-img">
            支持.jpg .jpeg .bmp .gif .png格式照片
          </label>
        </div>
      </div>

      <?php wei()->event->trigger('adminAdminEdit', [$user]); ?>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="nick-name">
          <span class="text-warning">*</span>
          昵称
        </label>

        <div class="col-lg-4">
          <input type="text" class="form-control" name="nickName" id="nick-name">
        </div>
      </div>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="password">
          <span class="text-warning">*</span>
          密码
        </label>

        <div class="col-lg-4">
          <input type="password" class="form-control" name="password" id="password">
        </div>

        <?php if (!$user->isNew()) : ?>
          <label class="col-sm-6 help-text" for="password">
            不修改密码请留空
          </label>
        <?php endif ?>
      </div>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="password-again">
          <span class="text-warning">*</span>
          重复密码
        </label>

        <div class="col-lg-4">
          <input type="password" class="form-control" name="passwordAgain" id="password-again">
        </div>
      </div>

      <div class="clearfix form-actions form-group">
        <div class="col-lg-offset-2">
          <input type="hidden" id="id" name="id">

          <button class="btn btn-primary" type="submit">
            <i class="fa fa-check bigger-110"></i>
            提交
          </button>

          &nbsp; &nbsp; &nbsp;
          <a class="btn btn-default" href="<?= $url('admin/admin/index') ?>">
            <i class="fa fa-undo bigger-110"></i>
            返回列表
          </a>
        </div>
      </div>

    </form>
  </div>
  <!-- PAGE CONTENT ENDS -->
</div><!-- /.col -->
<!-- /.row -->

<?= $block('js') ?>
<script>
  require(['form', 'plugins/admin/js/image-input'], function (form) {
    var groupJson = <?= json_encode(wei()->group()->notDeleted()->asc('name')->fetchAll()) ?>;
    form.toOptions($('#group-id'), groupJson, 'id', 'name');

    $('#record-form')
      .loadJSON(<?= json_encode($user); ?>)
      .ajaxForm({
        dataType: 'json',
        success: function (result) {
          $.msg(result, function () {
            if (result.code > 0) {
              window.location = $.url('admin/admin/index');
            }
          });
        }
      });

    $('.js-image-upload').each(function () {
      $(this).imageUploadInput();
    });
  });
</script>
<?= $block->end() ?>
