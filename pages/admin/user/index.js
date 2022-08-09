import {Page} from '@mxjs/a-page';
import {Form, FormAction, FormItem} from '@mxjs/a-form';
import {FormItemUpload} from '@miaoxing/admin';

const Index = () => {
  return (
    <Page>
      <Form method="put" afterSubmit={(ret) => {
        if (ret.isErr()) {
          return;
        }
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }}>
        <FormItem label="姓名" name="name"/>

        <FormItem label="昵称" name="nickName"/>

        <FormItemUpload label="头像" name="avatar" max={1}/>

        <FormAction list={false}/>
      </Form>
    </Page>
  );
};

export default Index;
