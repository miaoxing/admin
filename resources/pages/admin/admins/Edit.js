import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {FormAction, FormItem, ImageUpload, Options, Page, PageHeader} from 'components';
import Select from 'react-select';
import rp from 'require-promise';

const loader = Promise.all([
  import('jquery-populate'),
  import('jquery-form'),
  rp('plugins/app/js/validation')
]);

class AdminForm extends React.Component {
  componentDidMount() {
    loader.then(() => {
      $('.js-admin-form')
        .populate(wei.user)
        .ajaxForm({
          url: $.url('admin/admins/' + (wei.user.id ? 'update' : 'create')),
          dataType: 'json',
          beforeSubmit: (arr, $form) => $form.valid(),
          success: (ret) => {
            $.msg(ret, () => {
              if (ret.code === 1) {
                window.location = $.url('admin/admins');
              }
            });
          }
        })
        .validate();
    });
  }

  render() {
    return (
      <Page>
        <PageHeader>
          <Button href={$.url('admin/admins')}>返回列表</Button>
        </PageHeader>
        <Form className="js-admin-form" method="post">
          <FormItem label="用户名" name="username" required={!wei.user.id}
            control={wei.user.id && <p className="form-control-static">{wei.user.username}</p>}/>

          <FormItem label="密码" name="password" type="password" required={!wei.user.id}
            help={wei.user.id && '不修改密码请留空'}/>

          <FormItem label="重复密码" name="passwordAgain" type="password" required={!wei.user.id}/>

          {wei.isInstalledCan && <FormItem label="角色" name="roleIds" control={
            <Select isMulti name="roleIds[]" options={wei.roleOptions} defaultValue={wei.roleDefaultValue}
              placeholder="请选择"/>
          }/>}

          <FormItem label="姓名" name="name"/>

          <FormItem label="昵称" name="nickName"/>

          <FormItem label="用户组" name="groupId">
            <Options data={wei.groups} labelKey="name" valueKey="id" placeholder=""/>
          </FormItem>

          <FormItem label="头像" name="headImg" control={<ImageUpload name="headImg"/>}
            help="支持.jpg .jpeg .bmp .gif .png格式照片"/>

          <input type="hidden" id="id" name="id"/>

          <FormAction url={$.url('admin/admins')}/>
        </Form>
      </Page>
    )
  }
}

export default AdminForm;
