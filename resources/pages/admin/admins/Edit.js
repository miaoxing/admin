import React from 'react';
import Select from 'react-select';
import {Page, PageActions} from "@miaoxing/page";
import {Form, FormItem, FormAction, Options} from "@miaoxing/form";
import {CListBtn} from "@miaoxing/clink";
import $ from 'miaoxing';
import curUrl from "@miaoxing/cur-url";
import api from '@miaoxing/api';

class AdminForm extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    api.cur().then(ret => this.setState(ret));
  }

  render() {
    const user = this.state.user;

    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>
        <Form
          url={curUrl.apiForm()}
          redirectUrl={curUrl.index()}
          initialValues={this.state.user}
        >
          <FormItem label="用户名" name="username" required={!user.id}
            control={user.id && <p className="form-control-plaintext">{user.username}</p>}/>

          <FormItem label="密码" name="password" type="password" required={!user.id}
            help={user.id && '不修改密码请留空'}/>

          <FormItem label="重复密码" name="passwordAgain" type="password" required={!user.id}/>

          {this.state.isInstalledCan && <FormItem label="角色" name="roleIds" control={
            <Select isMulti name="roleIds[]" options={this.state.roleOptions} defaultValue={this.state.roleDefaultValue}
              placeholder="请选择"/>
          }/>}

          <FormItem label="姓名" name="name"/>

          <FormItem label="昵称" name="nickName"/>

          <FormItem label="用户组" name="groupId">
            <Options data={this.state.groups} labelKey="name" valueKey="id" placeholder=""/>
          </FormItem>

          <FormItem label="头像" name="headImg" help="支持.jpg .jpeg .bmp .gif .png格式照片"/>

          <input type="hidden" id="id" name="id"/>

          <FormAction/>
        </Form>
      </Page>
    )
  }
}

export default AdminForm;
