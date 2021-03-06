/**
 * @layout false
 */
import React from 'react';
import {Form, Button, Input} from 'antd';
import {Box, Flex, Heading, Image} from '@mxjs/box';
import $ from 'miaoxing';
import api from '@mxjs/api';
import {Global, css} from '@emotion/react';
import {FormItem} from '@mxjs/a-form';
import nextUrl from 'next-url';

export default class extends React.Component {
  render() {
    return <Flex>
      <Global
        styles={css`
          body {
            background: #f5f8fa url(https://image-10001577.image.myqcloud.com/uploads/3/20190602/15594729401485.jpg) no-repeat center center fixed;
            background-size: cover;
          }
        `}
      />
      <Box
        width={350}
        mx="auto"
        my={12}
        p={12}
        bg="white"
      >
        <Box
          mb={4}
          textAlign="center"
        >
          <Image height="50px" src="/images/logo.svg"/>
        </Box>
        <Heading
          mb={12}
          textAlign="center"
          fontSize="lg"
          fontWeight="normal"
          color="muted"
        >
          登录
        </Heading>
        <Form
          size="large"
          onFinish={async values => {
            const ret = await api.postCur({data: values});
            await $.ret(ret);
            if (ret.isSuc()) {
              window.localStorage.setItem('token', ret.token);
              window.location = nextUrl($.url('admin'));
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
    </Flex>;
  }
}
