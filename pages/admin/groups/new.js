/**
 * @share [id]/edit
 */
import {CListBtn} from '@mxjs/a-clink';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction} from '@mxjs/a-form';
import {Select, FormItemSort} from '@miaoxing/admin';

const New = () => {
  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <FormItem label="父级分组" name="parentId">
          <Select url="groups" labelKey="name" valueKey="id" firstLabel="根分组" firstValue=""/>
        </FormItem>
        <FormItem label="名称" name="name" required/>
        <FormItemSort/>
        <FormItem name="id" type="hidden"/>
        <FormAction/>
      </Form>
    </Page>
  );
};

export default New;
