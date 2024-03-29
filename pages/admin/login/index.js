/**
 * @layout false
 */
import { Card, Form, Button, Input, Layout } from 'antd';
import $ from 'miaoxing';
import api from '@mxjs/api';
import { Global, css } from '@emotion/react';
import { FormItem } from '@mxjs/a-form';
import nextUrl from 'next-url';
import { ConfigConsumer } from '@miaoxing/app';
import { history } from '@mxjs/app';
import { useEffect, useRef, useState } from 'react';
import publicSecurity from '@miaoxing/admin/images/public-security.png';
import bg from '@miaoxing/admin/images/bg.svg';
import propTypes from 'prop-types';
import { Box, Image } from '@mxjs/a-box';

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

const RecordNumber = ({publicSecurityRecordNumber, icpRecordNumber}) => {
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
    api.getCur().then(({ret}) => {
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

  return (
    <Box as={Layout} minH="100vh" bg="transparent">
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
      <Box flex={1}>
        <Box
          as={Card}
          w={350}
          mx="auto"
          my={12}
          p={6}
        >
          <Box
            mb={4}
            textAlign="center"
          >
            <ConfigConsumer>
              {({page}) => <Image h={50} src={page.logo}/>}
            </ConfigConsumer>
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
      <Box textAlign="center" py={4} color="gray.500">
        <ConfigConsumer>
          {({page}) => (
            <>{page.copyright}</>
          )}
        </ConfigConsumer>
        <RecordNumber {...data}/>
      </Box>
    </Box>
  );
};

export default Index;
