<?php $view->layout() ?>

<div class="page-header">
  <h1>
    修改资料
  </h1>
</div>
<!-- /.page-header -->

<div class="row">
  <div class="col-xs-12">
    <!-- PAGE CONTENT BEGINS -->
    <form id="record-form" class="form-horizontal" action="<?= $url('admin/admins/update-self') ?>" method="post"
      role="form">

      <div class="form-group">
        <label class="col-lg-2 control-label" for="head-img">
          头像
        </label>

        <div class="col-lg-4">
          <input class="js-head-img" type="text" id="head-img" name="headImg">
        </div>

        <div class="col-lg-4">
          <label class="help-text" for="head-img">
            支持.jpg .jpeg .bmp .gif .png格式照片
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="col-lg-2 control-label" for="nick-name">
          <span class="text-warning">*</span>
          昵称
        </label>

        <div class="col-lg-4">
          <input type="text" class="form-control" name="nickName" id="nick-name">
        </div>
      </div>

      <div class="clearfix form-actions form-group">
        <div class="col-lg-offset-2">
          <input type="hidden" id="id" name="id">

          <button class="btn btn-primary" type="submit">
            <i class="fa fa-check bigger-110"></i>
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
  <!-- PAGE CONTENT ENDS -->
</div><!-- /.col -->
<!-- /.row -->

<?= $block->js() ?>
<script>
  require(['form', 'plugins/admin/js/image-upload'], function (form) {
    var groupJson = <?= json_encode(wei()->group()->notDeleted()->asc('name')->fetchAll()) ?>;
    form.toOptions($('#group-id'), groupJson, 'id', 'name');

    $('#record-form')
      .loadJSON(<?= json_encode($user); ?>)
      .ajaxForm({
        dataType: 'json',
        success: function (result) {
          $.msg(result, function () {
            if (result.code > 0) {
              window.location = $.url('admin');
            }
          });
        }
      });

    $('.js-head-img').imageUpload();
  });
</script>
<?= $block->end() ?>
