import { Page } from '@mxjs/a-page';
import { Form, FormAction, FormItem } from '@mxjs/a-form';
import { Section } from '@mxjs/a-section';

const Index = () => {
  return (
    <Page>
      <Form method="patch">
        <Section title="基础信息">
          <FormItem label="ICP 备案号" name="adminLogin.icpRecordNumber"/>
          <FormItem label="公安备案号" name="adminLogin.publicSecurityRecordNumber" extra="填写后将显示在后台登录页面底部"/>
        </Section>
        <FormAction list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
