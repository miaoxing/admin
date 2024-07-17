/**
 * @share [id]/edit
 */
import { Page, PageActions } from '@mxjs/a-page';
import { Form, FormItem, FormActions } from '@mxjs/a-form';
import { CListBtn } from '@mxjs/a-clink';
import { Alert } from 'antd';
import { useConfig } from '@mxjs/config';
import { FormItemUpload, Cascader, Select, useOption } from '@miaoxing/admin';
import { Section } from '@mxjs/a-section';

const TYPE_DEFAULT = 1;

const AdminForm = () => {
  const config = useConfig();
  const isEnabledRoleManage = useOption('permission.isEnabledRoleManage', false);

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      {config?.app?.isDemo && <Alert className="mb-4" type="warning" showIcon message="当前是演示模式，提交后密码不会改变"/>}

      <Form>
        {({id, user}) => {
          return <>
            <Section>
              <FormItem label="用户名" name={['user', 'username']} required/>

              <FormItem
                label="密码" name={['user', 'password']} type="password" required={!id}
                controlProps={{placeholder: !!id && '不修改密码请留空'}}
              />

              <FormItem label="重复密码" name={['user', 'passwordAgain']} type="password" required={!id}/>

              {TYPE_DEFAULT === user?.adminType && isEnabledRoleManage && <FormItem label="角色" name="roleIds">
                <Select url="roles" labelKey="name" valueKey="id" mode="multiple"/>
              </FormItem>}

              <FormItem label="姓名" name={['user', 'name']}/>

              <FormItem label="昵称" name={['user', 'nickName']}/>

              <FormItem label="分组" name={['user', 'groupId']}>
                <Cascader url="groups" changeOnSelect/>
              </FormItem>

              <FormItemUpload
                label="头像" name={['user', 'avatar']} extra="支持.jpg .jpeg .bmp .gif .png格式照片" max={1}/>
            </Section>

            <FormActions/>
          </>;
        }}
      </Form>
    </Page>
  );
};

export default AdminForm;
