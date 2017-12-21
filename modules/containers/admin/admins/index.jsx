import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {Page, PageHeader, DataTable, SearchForm, SearchItem} from 'components';
import rp from 'require-promise';
import 'jquery-update-event';

const loader = Promise.all([
  rp('template'),
  import('query-url'),
  import('datatables-net-mx')
]);

class AdminIndex extends React.Component {
  componentDidMount() {
    loader.then(() => {
      // FIXME
      template.helper('$', $);

      var $table = $('.js-admin-table').dataTable({
        searchEl: '.js-admin-form',
        searchEvent: 'update',
        ajax: {
          url: $.queryUrl2('admin/admin.json')
        },
        order: [],
        columns: [
          {
            title: '用户名',
            data: 'name'
          },
          {
            title: '昵称',
            data: 'nickName',
            render: function (data, type, full) {
              return data || full.username;
            }
          },
          {
            title: '邮箱',
            data: 'email'
          },
          {
            title: '分组',
            data: 'group.name'
          },
          {
            title: '创建时间',
            data: 'createTime'
          },
          {
            title: `<span class="js-tips-hover table-header-tips" data-content="禁用后,用户将无法登录" 
              data-container="body" data-placement="bottom" data-trigger="hover">
                启用 <i class="fa fa-question-circle light-grey bigger-130"></i>
            </span>`,
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
            title: '操作',
            data: 'id',
            createdCell: (td, val) => {
              ReactDOM.render(<span>
                <a href={$.url('admin/admin/%s/edit', val)}>编辑</a>
                {' '}
                {wei.isInstalledCan && <a href={$.url('admin/users/%s/roles/assign', val)}>分配角色</a>}
              </span>, td);
            }
          }
        ]
      });

      $('.js-tips-hover').popover();

      // 切换状态
      $table.on('click', '.js-toggle-status', function () {
        const $this = $(this);
        var data = {};
        data['id'] = $this.data('id');
        data[$this.attr('name')] = +!$this.data('value');
        $.post($.url('admin/admin/enable'), data, function (result) {
          $.msg(result);
          $table.reload();
        }, 'json');
      });
    });
  }

  render() {
    return (
      <Page>
        <PageHeader>
          <Button bsStyle="success" href={$.url('admin/admin/new')}>添加管理员</Button>
        </PageHeader>
        <SearchForm className="js-admin-form">
          <SearchItem label="用户名" name="username" />

          <SearchItem label="昵称" name="nickName" />

          <SearchItem label="邮箱" name="email" />
        </SearchForm>
        <DataTable className="js-admin-table" />
      </Page>
    )
  }
}

export default AdminIndex;
