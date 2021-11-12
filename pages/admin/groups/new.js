/**
 * @share [id]/edit
 */
import { CListBtn } from '@mxjs/a-clink';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction} from '@mxjs/a-form';
import {FormItemSort} from '@miaoxing/admin';

export default () => {
  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <FormItem label="名称" name="name" required/>
        <FormItemSort/>
        <FormItem name="id" type="hidden"/>
        <FormAction/>
      </Form>
    </Page>
  );
};
