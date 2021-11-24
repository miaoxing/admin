/**
 * @layout false
 */
import { Component } from 'react';
import {Form, Button, Input} from 'antd';
import {Box, Image} from '@mxjs/box';
import $ from 'miaoxing';
import api from '@mxjs/api';
import {Global, css} from '@emotion/react';
import {FormItem} from '@mxjs/a-form';
import nextUrl from 'next-url';
import logo from '@miaoxing/admin/images/logo.svg';

export default class extends Component {
  render() {
    return <Box flex>
      <Global
        styles={css`
          body {
            background: #f5f8fa url(https://image-10001577.image.myqcloud.com/uploads/3/20190602/15594729401485.jpg) no-repeat center center fixed;
            background-size: cover;
          }
        `}
      />
      <Box
        w={350}
        mx="auto"
        my12
        p12
        bgWhite
      >
        <Box
          mb4
          textCenter
        >
          <Image h="50px" src={logo}/>
        </Box>
        <Box
          mb12
          textCenter
          textLG
          gray500
        >
          登录
        </Box>
        <Form
          size="large"
          onFinish={async values => {
            const {ret} = await api.postCur({data: values});
            await $.ret(ret);
            if (ret.isSuc()) {
              window.localStorage.setItem('token', ret.token);
              window.location.href = nextUrl($.url('admin'));
            }
          }}
        >
          <FormItem
            name="username"
            rules={[{required: true, message: '请输入用户名'}]}
          >
            <Input placeholder="用户名"/>
          </FormItem>

          <FormItem
            name="password"
            rules={[{required: true, message: '请输入密码'}]}
          >
            <Input.Password placeholder="密码"/>
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" block>
              登 录
            </Button>
          </FormItem>
        </Form>
      </Box>
    </Box>;
  }
}
