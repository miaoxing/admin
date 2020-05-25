import React from "react";
import {Page} from '@miaoxing/page';
import {Form, FormAction, FormItem} from '@miaoxing/a-form';
import curUrl from '@miaoxing/cur-url';
import {Alert} from 'react-bootstrap';
import app from '@miaoxing/app';
import {Box} from "rebass/styled-components";

export default class extends React.Component {
  render() {
    return <Page>
      <Box mb={4}>
        <Alert variant="warning">修改完成后需重新登录，请妥善保管好密码。</Alert>
      </Box>
      <Form
        valuesUrl={false}
        url={curUrl.apiUpdate()}
        redirectUrl={app.url('admin/login', {next: window.location.pathname})}
      >
        <FormItem label="旧密码" name="oldPassword" type="password" required/>

        <FormItem label="新密码" name="password" type="password" required/>

        <FormItem label="重复新密码" name="passwordConfirm" type="password" required/>

        <FormAction/>
      </Form>
    </Page>
  }
}
