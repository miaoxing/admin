import React from 'react';
import {Page, PageActions} from "@miaoxing/a-page";
import {Table, TableProvider, TableStatusCheckbox} from "@miaoxing/a-table";
import {SearchForm, SearchItem, Select} from '@miaoxing/a-form';
import {CNewBtn, CEditLink} from '@miaoxing/a-clink';
import {Tooltip} from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons'
import curUrl from "@miaoxing/cur-url";
import http from '@miaoxing/http';

export default class extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    http.curPath('index-config', {loading: true})
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
          <SearchForm>
            <SearchItem label="用户名" name="username$ct"/>

            <SearchItem label="姓名" name="name$ct"/>

            <SearchItem label="昵称" name="nickName$ct"/>

            <SearchItem label="分组" name="groupId" initialValue="">
              <Select options={this.state.data} labelKey="name" valueKey="id" all/>
            </SearchItem>
          </SearchForm>

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
