/**
 * @layout false
 */
import {Form, Button, Input} from 'antd';
import {Box, Image} from '@mxjs/box';
import $ from 'miaoxing';
import api from '@mxjs/api';
import {Global, css} from '@emotion/react';
import {FormItem} from '@mxjs/a-form';
import nextUrl from 'next-url';
import logo from '@miaoxing/admin/images/logo.svg';
import {ConfigConsumer} from '@miaoxing/app';
import {history} from '@mxjs/app';
import {useEffect, useRef} from 'react';

const bg = 'https://image-10001577.image.myqcloud.com/uploads/3/20190602/15594729401485.jpg';

/**
 * 解析 auth 参数，从中获得用户名和密码
 */
const parseAuth = () => {
  const auth = $.req('auth');
  if (!auth) {
    return;
  }

  let result;
  try {
    result = atob(auth);
  } catch (e) {
    return;
  }

  const index = result.indexOf(':');
  if (-1 === index) {
    return;
  }

  const username = result.substring(0, index);
  const password = result.substring(index + 1);

  return {username, password};
};

const Index = () => {
  const form = useRef();
  useEffect(() => {
    const result = parseAuth();
    if (!result) {
      return;
    }
    form.current.setFieldsValue(result);
  }, []);

  return (
    <Box flex>
      <ConfigConsumer>
        {({page}) => (
          <Global
            styles={css`
              body {
                background: #f5f8fa url(${page.bg || bg}) no-repeat center center fixed;
                background-size: cover;
              }
            `}
          />
        )}
      </ConfigConsumer>
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
          <ConfigConsumer>
            {({page}) => <Image h="50px" src={page.logo || logo}/>}
          </ConfigConsumer>
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
          ref={form}
          size="large"
          onFinish={async values => {
            const {ret} = await api.postCur({data: values});
            await $.ret(ret);
            if (ret.isSuc()) {
              window.localStorage.setItem('token', ret.token);
              window.location.href = history.createHref({pathname: nextUrl($.url('admin'))});
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
    </Box>
  );
};

export default Index;
