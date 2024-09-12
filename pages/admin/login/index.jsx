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
import propTypes from 'prop-types';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { defaultEntryBg } from '@miaoxing/admin';

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
    <div className="flex items-center justify-center">
      {publicSecurityRecordNumber && <a
        className="flex items-center mr-2 text-gray-500" target="_blank"
        href="https://www.beian.gov.cn/portal/registerSystemInfo">
        <img className="mr-1" src={publicSecurity}/>
        {publicSecurityRecordNumber}
      </a>}
      {icpRecordNumber && <a className="text-gray-500" href="https://beian.miit.gov.cn/" target="_blank">
        {icpRecordNumber}
      </a>}
    </div>
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
    <Layout className="min-h-screen bg-transparent">
      <Global
        styles={css`
          body {
            background: #f5f8fa url(${page.bg || defaultEntryBg}) no-repeat center center fixed;
            background-size: cover;
          }
        `}
      />
      <div className="flex-1">
        <Card className="w-[375px] mx-auto my-12 p-6">
          <div className="mb-4 text-center">
            <img className="inline h-16" src={page.logo} alt="Logo"/>
          </div>
          <div className="mb-12 text-center text-lg text-gray-500">
            登录
          </div>
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
        </Card>
      </div>
      <div className="text-center py-4 text-gray-500">
        {page.copyright}
        <RecordNumber {...data}/>
      </div>
    </Layout>
  );
};

export default Index;
