/**
 * @share [id]/edit
 */
import {CListBtn} from '@mxjs/a-clink';
import {Page, PageActions, PageContext} from '@mxjs/a-page';
import {Form, FormItem, FormAction} from '@mxjs/a-form';
import {Tree} from 'antd';
import {useContext, useEffect, useState} from 'react';
import {Box} from '@mxjs/box';
import propTypes from 'prop-types';

const buildTree = (menus) => {
  const tree = [];
  for (const i in menus) {
    const item = menus[i];
    // 该菜单不做权限控制
    if (false === item.permission) {
      continue;
    }

    const key = item.url || item.label;

    tree.push({
      ...item,
      title: item.label,
      key,
      children: item.children?.length ? buildTree(item.children) : [],
    });
  }
  return tree;
};

const TreeInput = ({value, onChange}) => {
  const {menus} = useContext(PageContext);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    setTree([{title: '全部', key: '*', children: buildTree(menus)}]);
  }, [menus]);

  const onCheck = (checkedKeysValue) => {
    onChange(checkedKeysValue);
  };

  return (
    tree.length > 0 ? <Box mt={4}>
      <Tree
        defaultExpandedKeys={['*']}
        checkable
        selectable={false}
        checkedKeys={tree.length ? value : []}
        onCheck={onCheck}
        treeData={tree}
      />
    </Box> : ''
  );
};

TreeInput.propTypes = {
  value: propTypes.array,
  onChange: propTypes.func,
};

const New = () => {
  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <FormItem label="名称" name="name" required/>

        <FormItem label="菜单" name="actions">
          <TreeInput/>
        </FormItem>

        <FormItem label="描述" name="description" type="textarea"/>
        <FormAction/>
      </Form>
    </Page>
  );
};

export default New;
