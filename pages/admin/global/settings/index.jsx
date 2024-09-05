import { Page } from '@mxjs/a-page';
import { Form, FormActions, FormItem } from '@mxjs/a-form';
import { FormItemUpload, useConfig } from '../../../../index';
import { Card } from 'antd';
import { useState } from 'react';

const tabContents = {
  '1': (
    <>
      <FormItem label="标题" name="adminPage.title"/>
      <FormItemUpload label="Logo" name="adminPage.logo" max={1}/>
      <FormItemUpload label="入口页背景图" name="adminPage.entryBg" tooltip="如登录页" max={1}/>
      <FormItem label="版权信息" name="adminPage.copyright"/>
    </>
  ),
  '2': (
    <>
      <FormItem label="ICP 备案号" name="adminLogin.icpRecordNumber"/>
      <FormItem label="公安备案号" name="adminLogin.publicSecurityRecordNumber" extra="填写后将显示在后台登录页面底部"/>
    </>
  ),
};

const Index = () => {
  const [activeTabKey, onTabChange] = useState('1');
  const { mutate } = useConfig();

  return (
    <Page>
      <Form
        method="patch"
        afterSuc={() => mutate()}
      >
        <Card
          tabList={[
            {
              key: '1',
              label: '基础信息',
            },
            {
              key: '2',
              label: '登录信息',
            },
          ]}
          activeTabKey={activeTabKey}
          onTabChange={onTabChange}
          className="mb-6"
        >
          {tabContents[activeTabKey]}
        </Card>
        <FormActions list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
