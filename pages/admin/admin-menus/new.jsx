/**
 * @share [id]/edit
 */
import { CListBtn } from '@mxjs/a-clink';
import { Page, PageActions } from '@mxjs/a-page';
import { Form, FormActions, FormItem } from '@mxjs/a-form';
import { Select, Space, Switch } from 'antd';
import { FormItemSort, TreeSelect } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';
import * as Icons from '@ant-design/icons';
import { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import * as SvgIcons from '@ant-design/icons-svg';
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import usePage from '../../../modules/use-page';

const options = Object.keys(Icons).filter(name => name.endsWith('Filled') || name.endsWith('Outlined')).map((name) => {
  return {
    label: name,
    value: name,
  };
});

const optionRender = ({ label, value }) => {
  if (!label) {
    // 从 svg 标签获取标题
    const titleMatch = value.match(/title="([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : null;
    return (
      <Space>
        <SVG src={value} className="text-base" fill="currentColor" width="1em" height="1em"/>
        {title || '自定义图标'}
      </Space>
    );
  }

  const Icon = Icons[label] || Fragment;
  return (
    <Space>
      <Icon className="text-base"/>
      {label}
    </Space>
  );
};

const IconSelector = ({ ...props }) => {
  return (
    <Select
      options={options}
      showSearch
      labelRender={optionRender}
      optionRender={optionRender}
      {...props}
    />
  );
};

const New = () => {
  const { mutate } = usePage();

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form
        beforeSubmit={values => {
          if (SvgIcons[values.icon]) {
            values.icon = renderIconDefinitionToSVGElement(SvgIcons[values.icon], {
              extraSVGAttrs: {
                // 将标题存储到 svg 标签中
                title: values.icon
              },
            });
          }
          return values;
        }}
        afterSuc={() => {
          mutate();
        }}
      >
        <Section>
          <FormItem label="父级菜单" name="parentId">
            <TreeSelect
              url="admin-menus"
              placeholder="请选择"
              fieldNames={{ label: 'label', value: 'id', children: 'children' }}
              prependData={{
                id: '',
                label: '根菜单',
              }}
            />
          </FormItem>

          <FormItem label="名称" name="label" required/>

          <FormItem label="链接" name="url"/>

          <FormItem label="图标" name="icon">
            <IconSelector/>
          </FormItem>

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
