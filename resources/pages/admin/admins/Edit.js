import React from 'react';
import {Page, PageActions} from "@miaoxing/page";
import {AForm, AFormItem, AFormAction, ASelect} from "@miaoxing/form";
import {CListBtn} from "@miaoxing/clink";
import api from '@miaoxing/api';

class AdminForm extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.curPath('edit-groups').then(ret => this.setState(ret));
  }

  render() {
    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>

        <AForm>
          {({id}) => {
            return <>
              <AFormItem label="用户名" name="username" type={id ? 'plain' : 'text'} required/>

              <AFormItem label="密码" name="password" type="password" required={!id} extra={!!id && '不修改密码请留空'}/>

              <AFormItem label="重复密码" name="passwordAgain" type="password" required={!id}/>

              <AFormItem label="姓名" name="name"/>

              <AFormItem label="昵称" name="nickName"/>

              <AFormItem label="分组" name="groupId">
                <ASelect options={this.state.data} labelKey="name" valueKey="id"/>
              </AFormItem>

              <AFormItem label="头像" name="avatar"
                extra="支持.jpg .jpeg .bmp .gif .png格式照片">

              </AFormItem>

              <AFormItem name="id" type="hidden"/>

              <AFormAction/>
            </>
          }}
        </AForm>
      </Page>
    )
  }
}

export default AdminForm;
