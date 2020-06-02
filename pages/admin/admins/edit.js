import React from 'react';
import {Page, PageActions} from "@miaoxing/a-page";
import {Form, FormItem, FormAction, Select} from "@miaoxing/a-form";
import {CListBtn} from "@miaoxing/a-clink";
import api from '@miaoxing/api';
import Upload, {convertToFirstFile} from '@miaoxing/upload';
import curUrl from '@miaoxing/cur-url';

class AdminForm extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.curPath('form-config').then(ret => this.setState(ret));
  }

  render() {
    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>

        <Form
          beforeSubmit={values => {
            values = convertToFirstFile(values, 'avatar');
            return values;
          }}
        >
          {({id}) => {
            return <>
              <FormItem label="用户名" name="username" type={id ? 'plain' : 'text'} required/>

              <FormItem label="密码" name="password" type="password" required={!id} extra={!!id && '不修改密码请留空'}/>

              <FormItem label="重复密码" name="passwordAgain" type="password" required={!id}/>

              <FormItem label="姓名" name="name"/>

              <FormItem label="昵称" name="nickName"/>

              <FormItem label="分组" name="groupId">
                <Select options={this.state.data} labelKey="name" valueKey="id"/>
              </FormItem>

              <FormItem label="头像" name="avatar"
                extra="支持.jpg .jpeg .bmp .gif .png格式照片"
                valuePropName="fileList"
              >
                <Upload url={curUrl.toApi('upload')} max={1}/>
              </FormItem>

              <FormItem name="id" type="hidden"/>

              <FormAction/>
            </>
          }}
        </Form>
      </Page>
    )
  }
}

export default AdminForm;
