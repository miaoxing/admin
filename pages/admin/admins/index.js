import {useEffect, useState} from 'react';
import {Page, PageActions} from '@mxjs/a-page';
import {Table, TableProvider, TableStatusCheckbox} from '@mxjs/a-table';
import {SearchForm, SearchItem, Select} from '@mxjs/a-form';
import {CNewBtn, CEditLink} from '@mxjs/a-clink';
import {Tooltip} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import api from '@mxjs/api';

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('groups?withUngroup=1').then(({ret}) => {
      setData(ret.data);
    });
  }, []);

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

          <SearchItem label="分组" name={['search', 'user', 'groupId']} initialValue="">
            <Select options={data} labelKey="name" valueKey="id" all/>
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
              dataIndex: ['group', 'name'],
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
              render: (id) => (
                <CEditLink id={id}/>
              ),
            },
          ]}
        />
      </TableProvider>
    </Page>
  );
}

export default Index;
