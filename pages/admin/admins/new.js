/**
 * @share [id]/edit
 */
import $ from 'miaoxing';
import React from 'react';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction, Select} from '@mxjs/a-form';
import {CListBtn} from '@mxjs/a-clink';
import api from '@mxjs/api';
import Upload from '@mxjs/upload';

class AdminForm extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.getMax('groups?withUngroup=1').then(ret => this.setState(ret));
  }

  render() {
    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>

        <Form>
          {({id}) => {
            return <>
              <FormItem label="用户名" name={['user', 'username']} type={id ? 'plain' : 'text'} required/>

              <FormItem label="密码" name={['user', 'password']} type="password" required={!id} extra={!!id && '不修改密码请留空'}/>

              <FormItem label="重复密码" name={['user', 'passwordAgain']} type="password" required={!id}/>

              <FormItem label="姓名" name={['user', 'name']}/>

              <FormItem label="昵称" name={['user', 'nickName']}/>

              <FormItem label="分组" name={['user', 'groupId']}>
                <Select options={this.state.data} labelKey="name" valueKey="id"/>
              </FormItem>

              <FormItem label="头像" name={['user', 'avatar']} extra="支持.jpg .jpeg .bmp .gif .png格式照片">
                <Upload url={$.apiUrl('files', {type: 'image'})} max={1}/>
              </FormItem>

              <FormItem name="id" type="hidden"/>

              <FormAction/>
            </>;
          }}
        </Form>
      </Page>
    );
  }
}

export default AdminForm;
