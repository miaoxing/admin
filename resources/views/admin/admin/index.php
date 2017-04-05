<?php $view->layout() ?>

<?= $block('css') ?>
<link rel="stylesheet" href="<?= $asset('plugins/admin/css/filter.css') ?>"/>
<?= $block->end() ?>

<div class="page-header">
  <a class="btn pull-right btn-success" href="<?= $url('admin/admin/new') ?>">添加管理员</a>

  <h1>
    管理员管理
    <small>
      <i class="fa fa-angle-double-right"></i>
      用户列表
    </small>
  </h1>
</div>
<!-- /.page-header -->

<div class="row">
  <div class="col-xs-12">
    <!-- PAGE CONTENT BEGINS -->
    <div class="table-responsive">
      <form class="js-user-form form-horizontal filter-form" role="form">
        <div class="well form-well m-b">

          <div class="form-group form-group-sm">
            <label class="col-md-1 control-label" for="name">用户名：</label>

            <div class="col-md-3">
              <input type="text" class="form-control" id="name" name="name">
            </div>

            <label class="col-md-1 control-label" for="nick-name">昵称：</label>

            <div class="col-md-3">
              <input type="text" class="form-control" id="nick-name" name="nickName">
            </div>

            <label class="col-md-1 control-label" for="email">邮箱：</label>

            <div class="col-md-3">
              <input type="text" class="form-control" id="email" name="email">
            </div>
          </div>

        </div>
      </form>

      <table id="record-table" class="record-table table table-striped table-bordered table-hover">
        <thead>
        <tr>
          <th>用户名</th>
          <th>昵称</th>
          <th>邮箱</th>
          <th>分组</th>
          <th>创建时间</th>
          <th>
            <span class="js-tips-hover table-header-tips" data-content="禁用后,用户将无法登录" data-container="body"
              data-placement="bottom" data-trigger="hover">
                启用 <i class="fa fa-question-circle light-grey bigger-130"></i>
            </span>
          </th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    </div>
    <!-- /.table-responsive -->
    <!-- PAGE CONTENT ENDS -->
  </div>
</div>
<!-- /.row -->

<?= $block('js') ?>
<script>
  require(['dataTable', 'jquery-deparam', 'form'], function () {
    $('.js-user-form').loadParams().update(function () {
      recordTable.reload($(this).serialize(), false);
    });

    var recordTable = $('#record-table').dataTable({
      ajax: {
        url: $.queryUrl('admin/admin.json')
      },
      columns: [
        {
          data: 'username'
        },
        {
          data: 'nickName',
          render: function (data, type, full) {
            return data || full.username;
          }
        },
        {
          data: 'email'
        },
        {
          data: 'group.name'
        },
        {
          data: 'createTime'
        },
        {
          data: 'enable',
          render: function (data, type, full) {
            return template.render('checkbox-col-tpl', {
              id: full.id,
              name: 'enable',
              value: data
            });
          }
        },
        {
          data: 'id',
          render: function (data, type, full) {
            return template.render('table-actions', full)
          }
        }
      ]
    });

    // 点击删除用户
    recordTable.on('click', '.delete-record', function () {
      var link = $(this);
      $.confirm('删除后将无法还原,确认删除?', function () {
        $.post(link.data('href'), function (result) {
          $.msg(result);
          recordTable.reload();
        }, 'json');
      });
    });

    // 切换状态
    recordTable.on('click', '.toggle-status', function () {
      var $this = $(this);
      var data = {};
      data['id'] = $this.data('id');
      data[$this.attr('name')] = +!$this.data('value');
      $.post($.url('admin/admin/enable'), data, function (result) {
        $.msg(result);
        recordTable.reload();
      }, 'json');
    });

    $('.js-tips-hover').popover();
  });
</script>
<?= $block->end() ?>

<script id="table-actions" type="text/html">
  <a href="<%= $.url('admin/admin/edit', {id: id}) %>">
    编辑
  </a>
  <?php if ($plugin->isInstalled('can')) : // TODO 独立的列表来分配角色?>
    <a href="<%= $.url('admin/users/%s/roles/assign', id) %>">
      分配角色
    </a>
  <?php endif ?>
</script>

<?php require $view->getFile('admin:admin/checkboxCol.php') ?>
