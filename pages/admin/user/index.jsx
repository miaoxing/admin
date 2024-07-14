import { Page } from '@mxjs/a-page';
import { Form, FormAction, FormItem } from '@mxjs/a-form';
import { FormItemUpload } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';

const Index = () => {
  return (
    <Page>
      <Form method="PATCH" afterSuc={() => {
        window.location.reload();
      }}>
        <Section>
          <FormItem label="姓名" name="name"/>

          <FormItem label="昵称" name="nickName"/>

          <FormItemUpload label="头像" name="avatar" max={1}/>
        </Section>

        <FormAction list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
