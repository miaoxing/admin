/**
 * @share [id]/edit
 */
import {useState, useEffect} from 'react';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction} from '@mxjs/a-form';
import {CListBtn} from '@mxjs/a-clink';
import api from '@mxjs/api';
import {Box} from '@mxjs/box';
import {Alert, TreeSelect} from 'antd';
import {useConfig} from '@miaoxing/app';
import {FormItemUpload} from '@miaoxing/admin';
import $ from 'miaoxing';

const AdminForm = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    api.getMax('groups', {loading: true}).then(({ret}) => {
      if (ret.isSuc()) {
        const data = ret.data.map(group => ({
          value: group.id,
          title: group.name,
          children: group.children.map(subGroup => ({
            value: subGroup.id,
            title: subGroup.name,
          })),
        }));
        data.unshift({
          value: '',
          title: '未分组',
        });
        setGroups(data);
      } else {
        $.ret(ret);
      }
    });
  }, []);

  const config = useConfig();

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      {config?.app?.isDemo && <Box my4>
        <Alert type="warning" showIcon message="当前是演示模式，提交后密码不会改变"/>
      </Box>}

      <Form>
        {({id}) => {
          return <>
            <FormItem label="用户名" name={['user', 'username']} type={id ? 'plain' : 'text'} required/>

            <FormItem label="密码" name={['user', 'password']} type="password" required={!id} extra={!!id && '不修改密码请留空'}/>

            <FormItem label="重复密码" name={['user', 'passwordAgain']} type="password" required={!id}/>

            <FormItem label="姓名" name={['user', 'name']}/>

            <FormItem label="昵称" name={['user', 'nickName']}/>

            <FormItem label="分组" name={['user', 'groupId']}>
              <TreeSelect
                showSearch
                showArrow
                allowClear
                treeDefaultExpandAll
                placeholder="请选择"
                treeData={groups}
              />
            </FormItem>

            <FormItemUpload label="头像" name={['user', 'avatar']} extra="支持.jpg .jpeg .bmp .gif .png格式照片" max={1}/>

            <FormItem name="id" type="hidden"/>

            <FormAction/>
          </>;
        }}
      </Form>
    </Page>
  );
};

export default AdminForm;
