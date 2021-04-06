import $ from 'miaoxing';
import React from 'react';
import {Page} from '@mxjs/a-page';
import {Form, FormAction, FormItem} from '@mxjs/a-form';
import {Alert} from 'antd';
import {Box} from '@mxjs/box';
import curUrl from '@mxjs/cur-url';

export default class extends React.Component {
  render() {
    return <Page>
      <Box mb={4}>
        <Alert type="warning" message="修改完成后需重新登录，请妥善保管好密码。"/>
      </Box>
      <Form
        valuesUrl={false}
        url={curUrl.api()}
        method="put"
        redirectUrl={$.url('admin/login', {next: window.location.pathname})}
      >
        <FormItem label="旧密码" name="oldPassword" type="password" required/>

        <FormItem label="新密码" name="password" type="password" required/>

        <FormItem label="重复新密码" name="passwordConfirm" type="password" required/>

        <FormAction list={false}/>
      </Form>
    </Page>;
  }
}
