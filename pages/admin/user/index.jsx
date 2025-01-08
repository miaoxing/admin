import { Page } from '@mxjs/a-page';
import { Form, FormActions, FormItem } from '@mxjs/a-form';
import { FormItemUpload, useUser } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';

const Index = () => {
  const { mutate } = useUser();

  return (
    <Page>
      <Form
        method="PATCH"
        afterSuc={() => {
          mutate();
        }}
      >
        <Section>
          <FormItem label="姓名" name="name"/>

          <FormItem label="昵称" name="nickName"/>

          <FormItemUpload label="头像" name="avatar" max={1}/>
        </Section>

        <FormActions list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
