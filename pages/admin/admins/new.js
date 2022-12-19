/**
 * @share [id]/edit
 */
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction} from '@mxjs/a-form';
import {CListBtn} from '@mxjs/a-clink';
import {Box} from '@mxjs/box';
import {Alert} from 'antd';
import {useConfig} from '@miaoxing/app';
import {FormItemUpload, TreeSelect} from '@miaoxing/admin';

const AdminForm = () => {
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
                url="groups"
                placeholder="请选择"
                prependData={{
                  id: '',
                  name: '未分组',
                }}
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
