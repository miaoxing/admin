/**
 * @share [id]/edit
 */
import { CListBtn } from '@mxjs/a-clink';
import { Page, PageActions } from '@mxjs/a-page';
import { Form, FormActions, FormItem } from '@mxjs/a-form';
import { Switch } from 'antd';
import { FormItemSort, FormItemUpload, TreeSelect } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';
import usePage from '../../../modules/use-page';

const New = () => {
  const { mutate } = usePage();

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form
        afterSuc={() => {
          mutate();
        }}
      >
        <Section>
          <FormItem label="父级菜单" name="parentId">
            <TreeSelect
              url="admin-menus"
              placeholder="请选择"
              fieldNames={{label: 'label', value: 'id', children: 'children'}}
              prependData={{
                id: '',
                label: '根菜单',
              }}
            />
          </FormItem>

          <FormItem label="名称" name="label" required/>

          <FormItem label="链接" name="url"/>

          <FormItemUpload label="图标" name="icon" max={1}/>

          <FormItemSort/>

          <FormItem label="是否显示" name="isShow" valuePropName="checked">
            <Switch/>
          </FormItem>

          <FormItem label="是否启用" name="isEnabled" valuePropName="checked">
            <Switch/>
          </FormItem>
        </Section>

        <FormActions/>
      </Form>
    </Page>
  );
};

export default New;
