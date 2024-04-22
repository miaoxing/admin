/**
 * @layout false
 */
import { Button, Card, Form, Input, Layout } from 'antd';
import $ from 'miaoxing';
import api from '@mxjs/api';
import { css, Global } from '@emotion/react';
import { FormItem } from '@mxjs/a-form';
import nextUrl from 'next-url';
import { useConfig } from '@mxjs/config';
import { useEffect, useRef, useState } from 'react';
import publicSecurity from '@miaoxing/admin/images/public-security.png';
import bg from '@miaoxing/admin/images/bg.svg';
import propTypes from 'prop-types';
import { Box, Image } from '@mxjs/a-box';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

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

  return { username, password };
};

const RecordNumber = ({ publicSecurityRecordNumber, icpRecordNumber }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" ml={2}>
      {publicSecurityRecordNumber && <Box as="a" display="flex" alignItems="center" mr={2} color="gray.500" target="_blank"
                                          href="https://www.beian.gov.cn/portal/registerSystemInfo">
        <Image mr={1} src={publicSecurity}/>
        {publicSecurityRecordNumber}
      </Box>}
      {icpRecordNumber && <Box as="a" color="gray.500" href="https://beian.miit.gov.cn/" target="_blank">
        {icpRecordNumber}
      </Box>}
    </Box>
  );
};

RecordNumber.propTypes = {
  publicSecurityRecordNumber: propTypes.string,
  icpRecordNumber: propTypes.string,
};

const Index = () => {
  const form = useRef();

  const [data, setData] = useState({});
  useEffect(() => {
    api.getCur().then(({ ret }) => {
      if (ret.isSuc()) {
        setData(ret.data);
      }
    });
  }, []);

  useEffect(() => {
    const result = parseAuth();
    if (!result) {
      return;
    }
    form.current.setFieldsValue(result);
  }, []);

  const { page = {} } = useConfig();

  return (
    <Box as={Layout} minH="100vh" bg="transparent">
      <Global
        styles={css`
          body {
            background: #f5f8fa url(${page.bg || bg}) no-repeat center center fixed;
            background-size: cover;
          }
        `}
      />
      <Box flex={1}>
        <Box
          as={Card}
          w={375}
          mx="auto"
          my={12}
          p={6}
        >
          <Box
            mb={4}
            textAlign="center"
          >
            <Image h={50} src={page.logo}/>
          </Box>
          <Box
            mb={12}
            textAlign="center"
            fontSize="lg"
            color="gray.500"
          >
            登录
          </Box>
          <Form
            ref={form}
            size="large"
            onFinish={async values => {
              const { ret } = await api.postCur({ data: values });
              $.ret(ret);
              if (ret.isSuc()) {
                window.localStorage.setItem('token', ret.token);
                $.to(nextUrl('admin'));
              }
            }}
          >
            <FormItem
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="用户名" prefix={<UserOutlined/>}/>
            </FormItem>

            <FormItem
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="密码" prefix={<LockOutlined/>}/>
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" block>
                登 录
              </Button>
            </FormItem>
          </Form>
        </Box>
      </Box>
      <Box textAlign="center" py={4} color="gray.500">
        {page.copyright}
        <RecordNumber {...data}/>
      </Box>
    </Box>
  );
};

export default Index;
