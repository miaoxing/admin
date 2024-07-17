/**
 * @share [id]/edit
 */
import { CListBtn } from '@mxjs/a-clink';
import { Page, PageActions } from '@mxjs/a-page';
import { Form, FormItem, FormActions } from '@mxjs/a-form';
import { Select, FormItemSort } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';

const New = () => {
  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <Section>
          <FormItem label="父级分组" name="parentId">
            <Select url="groups" labelKey="name" valueKey="id" firstLabel="根分组" firstValue=""/>
          </FormItem>
          <FormItem label="名称" name="name" required/>
          <FormItemSort/>
        </Section>

        <FormActions/>
      </Form>
    </Page>
  );
};

export default New;
