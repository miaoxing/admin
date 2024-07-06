import $ from 'miaoxing';
import {Page} from '@mxjs/a-page';
import {Form, FormAction, FormItem} from '@mxjs/a-form';
import {Alert} from 'antd';
import curUrl from '@mxjs/cur-url';
import {useConfig} from '@mxjs/config';
import { useLocation } from 'react-router';

const Index = () => {
  const config = useConfig();
  const location = useLocation();

  return (
    <Page>
      <Alert className="mb-4" type="warning" showIcon message="修改完成后需重新登录，请妥善保管好密码。"/>
      {config?.app?.isDemo && <Alert className="mb-4" type="warning" showIcon message="当前是演示模式，提交后密码不会改变"/>}
      <Form
        valuesUrl={false}
        url={curUrl.api()}
        method="put"
        redirectUrl={$.url('admin/login', {next: location.pathname})}
      >
        <FormItem label="旧密码" name="oldPassword" type="password" required/>

        <FormItem label="新密码" name="password" type="password" required/>

        <FormItem label="重复新密码" name="passwordConfirm" type="password" required/>

        <FormAction list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
