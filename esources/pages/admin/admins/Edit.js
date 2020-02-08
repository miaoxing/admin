import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import app from 'app';
import Form from "components/Form";
import {Page, PageActions} from "@miaoxing/page";
import FormItem from "components/FormItem";
import Options from "components/Options";
import FormAction from "components/FormAction";
import CListBtn from "components/CListBtn";

class AdminForm extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios.get(app.curApiUrl())
      .then(({data}) => {
        this.setState(data);
      });
  }

  render() {
    const user = this.state.user;

    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>
        <Form
          url={app.curApiFormUrl()}
          redirectUrl={app.curIndexUrl()}
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