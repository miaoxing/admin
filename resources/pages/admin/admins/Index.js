import React from 'react';
import {Page, PageActions} from "@miaoxing/page";
import {TableProvider, TableStatusCheckbox} from "@miaoxing/table";
import {CEditLink, CNewBtn} from "@miaoxing/clink";
import {Select, Tooltip} from "antd";
import {Table} from "@miaoxing/table";
import {QuestionCircleOutlined} from '@ant-design/icons'
import curUrl from "@miaoxing/cur-url";
import api from '@miaoxing/api';
import {ASearchForm, ASearchItem} from '@miaoxing/form';

export default class extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.curPath('index-groups',{loading: true})
      .then(ret => {
        this.setState(ret);
      });
  }

  render() {
    return (
      <Page>
        <PageActions>
          <CNewBtn/>
        </PageActions>

        <TableProvider>
          <ASearchForm
            initialValues={{
              groupId: ''
            }}
          >
            <ASearchItem label="用户名" name="username$ct"/>

            <ASearchItem label="姓名" name="name$ct"/>

            <ASearchItem label="昵称" name="nickName$ct"/>

            <ASearchItem label="分组" name="groupId">
              <Select>
                <Select.Option value="">全部</Select.Option>
                {this.state.data.map(group => (
                  <Select.Option key={group.id} value={group.id}>{group.name}</Select.Option>
                ))}
              </Select>
            </ASearchItem>
          </ASearchForm>

          <Table
            columns={[
              {
                title: '用户名',
                dataIndex: 'username'
              },
              {
                title: '姓名',
                dataIndex: 'name',
              },
              {
                title: '昵称',
                dataIndex: 'nickName'
              },
              {
                title: '分组',
                dataIndex: ['group', 'name']
              },
              {
                title: '创建时间',
                dataIndex: 'createdAt'
              },
              {
                title: <Tooltip title="禁用后，用户将无法登录">
                  启用 <QuestionCircleOutlined/>
                </Tooltip>,
                dataIndex: 'isEnabled',
                render: (cell, row) => {
                  return <TableStatusCheckbox url={curUrl.toApi('enable')} row={row} name="isEnabled"/>
                }
              },
              {
                title: '操作',
                dataIndex: 'id',
                render: (id) => (
                  <CEditLink id={id}/>
                ),
              }
            ]}
          />
        </TableProvider>
      </Page>
    )
  }
}
