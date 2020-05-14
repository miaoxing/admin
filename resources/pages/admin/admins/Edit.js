import React from 'react';
import {Select} from 'antd';
import {Page, PageActions} from "@miaoxing/page";
import {AForm, AFormItem, AFormAction} from "@miaoxing/form";
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
          {({id, username}) => {
            return <>
              {id ? <AFormItem label="用户名">{username}</AFormItem> : <AFormItem label="用户名" name="username" required/>}

              <AFormItem label="密码" name="password" required={!id} extra={!!id && '不修改密码请留空'}/>

              <AFormItem label="重复密码" name="passwordAgain" required={!id}/>

              <AFormItem label="姓名" name="name"/>

              <AFormItem label="昵称" name="nickName"/>

              <AFormItem label="分组" name="groupId">
                <Select defaultValue={0}>
                  <Select.Option value={0}>无</Select.Option>
                  {this.state.data.map(group => (
                    <Select.Option key={group.id} value={group.id}>{group.name}</Select.Option>
                  ))}
                </Select>
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
