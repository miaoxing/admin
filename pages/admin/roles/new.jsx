/**
 * @share [id]/edit
 */
import { CListBtn } from '@mxjs/a-clink';
import { Page, PageActions, PageContext } from '@mxjs/a-page';
import { Form, FormActions, FormItem } from '@mxjs/a-form';
import { Tree } from 'antd';
import { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Select, useOption } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';

const buildTree = (menus) => {
  const tree = [];
  for (const i in menus) {
    const item = menus[i];
    // 该菜单不做权限控制
    if (false === item.permission) {
      continue;
    }

    // 菜单下面还有操作，将菜单作为一项以便单独选择
    let children = item.children;
    if (item.url && children?.length) {
      item.permission = '#' + item.url;
      children = [{
        label: item.permissionLabel || (item.label + '页面'),
        permission: item.url,
      }, ...children];
    }

    tree.push({
      ...item,
      title: item.label,
      key: item.permission || item.url || item.label,
      children: children?.length ? buildTree(children) : [],
    });
  }
  return tree;
};

const TreeInput = ({ value, onChange }) => {
  const { menus } = useContext(PageContext);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    setTree([{ title: '全部', key: '*', children: buildTree(menus) }]);
  }, [menus]);

  const onCheck = (checkedKeysValue) => {
    onChange(checkedKeysValue);
  };

  return (
    tree.length > 0 ? <Tree
      className="mt-1"
      defaultExpandedKeys={['*']}
      checkable
      selectable={false}
      checkedKeys={tree.length ? value : []}
      onCheck={onCheck}
      treeData={tree}
    /> : ''
  );
};

TreeInput.propTypes = {
  value: propTypes.array,
  onChange: propTypes.func,
};

const New = () => {
  const isEnabledPermissionManage = useOption('permission.isEnabledPermissionManage', false);

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <Section>
          <FormItem label="名称" name="name" required/>

          <FormItem label="菜单和操作" name="actions">
            <TreeInput/>
          </FormItem>

          {isEnabledPermissionManage && <FormItem label="权限" name="permissionIds">
            <Select url="permissions" mode="multiple" labelKey="name" valueKey="id"/>
          </FormItem>}

          <FormItem label="描述" name="description" type="textarea"/>
        </Section>

        <FormActions/>
      </Form>
    </Page>
  );
};

export default New;
