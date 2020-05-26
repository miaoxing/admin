/**
 * @layout false
 */
import React from "react";
import {Button, Form, Input} from "antd";
import {Box, Heading, Image} from 'rebass';
import $ from 'miaoxing';
import app from '@miaoxing/app';
import logo from 'plugins/admin/resources/images/logo.png';
import api from '@miaoxing/api';
import {Global, css} from '@emotion/core'

export default class extends React.Component {
  render() {
    return <>
      <Global
        styles={css`
          body {
            background: #f5f8fa url(https://image-10001577.image.myqcloud.com/uploads/3/20190602/15594729401485.jpg);
            background-size: cover;
          }
      `}
      />
      <Box
        width={350}
        mx="auto"
        mt={5}
        p={5}
        bg="white"
      >
        <Box
          mb={4}
          textAlign="center"
        >
          <Image height={30} src={logo}/>
        </Box>
        <Heading
          mb={5}
          textAlign="center"
          fontSize={3}
          fontWeight="normal"
          color="muted"
        >
          登录
        </Heading>
        <Form
          onFinish={async values => {
            const ret = await api.post('user/login', {data: values});
            await $.ret(ret);
            if (ret.code === 1) {
              const next = app.req('next');
              window.location = (next && next.startsWith('/')) ? next : app.url('admin');
            }
          }}
        >
          <Form.Item
            name="username"
            rules={[{required: true, message: '请输入用户名'}]}
          >
            <Input placeholder="用户名" size="large"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: '请输入密码'}]}
          >
            <Input.Password placeholder="密码" size="large"/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登 录
            </Button>
          </Form.Item>
        </Form>
      </Box>
    </>;
  }
}
