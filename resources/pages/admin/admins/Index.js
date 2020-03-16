import React from 'react';
import app from 'plugins/app/resources/modules/app';
import {Page, PageActions} from "@miaoxing/page";
import {SearchFormik, SearchItem, Options} from '@miaoxing/form';
import {TableProvider, TableStatusCheckbox} from "@miaoxing/table";
import {CEditLink, CNewBtn} from "@miaoxing/clink";
import {Col, Form, Input, Row, Select, Tooltip} from "antd";
import Table from "antdx-table";
import {QuestionCircleOutlined} from '@ant-design/icons'
import $ from 'miaoxing';

export default class extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.get(app.url('admin-api/admins/groups'), {loading: true})
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
          <Form
            labelCol={{span: 8}} wrapperCol={{span: 16}}
            onFieldsChange={(changedFields, allFields) => {
              console.log(changedFields, allFields, 'f');
            }}
            onValuesChange={(changedValues, allValues) => {
              console.log(changedValues, allValues, 'x');
              // search
            }}
          >
            <Row>
              <Col span={8}>
                <Form.Item label="用户名" name="username">
                  <Input/>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="姓名" name="name">
                  <Input/>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="昵称" name="nickName">
                  <Input/>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="分组" name="groupId">
                  <Select>
                    <Select.Option value="male">male</Select.Option>
                    <Select.Option value="female">female</Select.Option>
                    <Select.Option value="other">other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <SearchFormik>
            <SearchItem label="用户名" name="username"/>

            <SearchItem label="姓名" name="name"/>

            <SearchItem label="昵称" name="nickName"/>

            <SearchItem label="分组" name="groupId">
              <Options data={this.state.data} labelKey="name" valueKey="id" placeholder="全部"/>
            </SearchItem>
          </SearchFormik>

          <Table
            url={app.curApiUrl()}
            search={false}
            columns={[
              {
                title: '用户名',
                dataIndex: 'username'
              },
              {
                title: '姓名',
                dataIndex: 'name',
                render: text => text || '-',
              },
              {
                title: '昵称',
                dataIndex: 'nickName'
              },
              {
                title: '分组',
                dataIndex: 'group.name'
              },
              {
                title: '创建时间',
                dataIndex: 'createTime'
              },
              {
                title: <Tooltip title="禁用后，用户将无法登录">
                  启用 <QuestionCircleOutlined className="align-middle"/>
                </Tooltip>,
                dataIndex: 'enable',
                render: (cell, row) => {
                  return <TableStatusCheckbox url={app.url('admin-api/admins/enable')} row={row} name="enable"/>
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
