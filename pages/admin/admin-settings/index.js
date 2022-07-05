import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormAction, FormItem} from '@mxjs/a-form';

const Index = () => {
  return (
    <Page>
      <PageActions mb12>
        后台设置
      </PageActions>
      <Form method="patch" labelCol={{span: 8}} wrapperCol={{span: 8}}>
        <FormItem label="ICP 备案号" name="adminLogin.icpRecordNumber"/>
        <FormItem label="公安备案号" name="adminLogin.publicSecurityRecordNumber" extra="填写后将显示在后台登录页面底部"/>
        <FormAction wrapperCol={{offset: 8}} list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
