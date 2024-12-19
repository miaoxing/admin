import { Page, PageActions } from '@mxjs/a-page';
import { Table, TableActions, TableProvider, TableStatusCheckbox } from '@mxjs/a-table';
import { SearchForm, SearchItem } from '@mxjs/a-form';
import { CNewBtn, CEditLink } from '@mxjs/a-clink';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { TreeSelect } from '@miaoxing/admin';
import CDeleteLink from '@mxjs/a-clink/CDeleteLink';

const TYPE_SUPER = 2;

const isSuper = (admin) => {
  return admin.user.adminType === TYPE_SUPER;
};

const Index = () => {
  return (
    <Page>
      <PageActions>
        <CNewBtn/>
      </PageActions>

      <TableProvider>
        <SearchForm>
          <SearchItem label="用户名" name={['search', 'user', 'username:ct']}/>

          <SearchItem label="姓名" name={['search', 'user', 'name:ct']}/>

          <SearchItem label="昵称" name={['search', 'user', 'nickName:ct']}/>

          <SearchItem label="分组" name={['search', 'user', 'groupId']}>
            <TreeSelect
              url="groups"
              placeholder="全部"
              prependData={{
                id: '0',
                name: '未分组',
              }}
            />
          </SearchItem>
        </SearchForm>

        <Table
          columns={[
            {
              title: '用户名',
              dataIndex: ['user', 'username'],
            },
            {
              title: '姓名',
              dataIndex: ['user', 'name'],
            },
            {
              title: '昵称',
              dataIndex: ['user', 'nickName'],
            },
            {
              title: '分组',
              dataIndex: ['user', 'group'],
              render: (group) => {
                return [
                  group?.parent?.name,
                  group?.name,
                ].filter(Boolean).join(' / ') || '-';
              },
            },
            {
              title: '创建时间',
              dataIndex: 'createdAt',
            },
            {
              title: <Tooltip title="禁用后，用户将无法登录">
                启用 <QuestionCircleOutlined/>
              </Tooltip>,
              dataIndex: ['user', 'isEnabled'],
              render: (cell, row) => {
                return row.id === 1 ? <Tooltip title="不能禁用超级管理员">-</Tooltip> :
                  <TableStatusCheckbox row={row} name={['user', 'isEnabled']}/>;
              },
            },
            {
              title: '操作',
              dataIndex: 'id',
              render: (id, row) => (
                <TableActions>
                  <CEditLink id={id}/>
                  {!isSuper(row) && <CDeleteLink id={id}/>}
                </TableActions>
              ),
            },
          ]}
        />
      </TableProvider>
    </Page>
  );
};

export default Index;
