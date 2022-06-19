/**
 * @share [id]/edit
 */
import {useState, useEffect} from 'react';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction, Select} from '@mxjs/a-form';
import {CListBtn} from '@mxjs/a-clink';
import api from '@mxjs/api';
import Upload from '@mxjs/upload';
import {Box} from '@mxjs/box';
import {Alert} from 'antd';
import {useConfig} from '@miaoxing/app';

const AdminForm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getMax('groups').then(({ret}) => {
      setData(ret.data);
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
              <Select options={data} labelKey="name" valueKey="id" firstLabel="请选择" firstValue=""/>
            </FormItem>

            <FormItem label="头像" name={['user', 'avatar']} extra="支持.jpg .jpeg .bmp .gif .png格式照片">
              <Upload max={1}/>
            </FormItem>

            <FormItem name="id" type="hidden"/>

            <FormAction/>
          </>;
        }}
      </Form>
    </Page>
  );
};

export default AdminForm;
