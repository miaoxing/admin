import React from 'react';
import app from 'app';
import {Button, FormCheck, OverlayTrigger, Popover} from 'react-bootstrap';
import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import SearchForm from 'components/SearchForm';
import SearchItem from 'components/SearchItem';
import Options from 'components/Options';
import Table from 'components/Table';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import TableStatusCheckbox from 'components/TableStatusCheckbox';

export default class extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader>
          <Button variant="success" href={app.curNewUrl()}>添加</Button>
        </PageHeader>

        <SearchForm className="js-admin-form">
          <SearchItem label="用户名" name="username"/>

          <SearchItem label="姓名" name="name"/>

          <SearchItem label="昵称" name="nickName"/>

          <SearchItem label="分组" name="groupId">
            <Options data={wei.groups} labelKey="name" valueKey="id" placeholder="全部"/>
          </SearchItem>
        </SearchForm>

        <Table
          columns={[
            {
              text: '用户名',
              dataField: 'username'
            },
            {
              text: '姓名',
              dataField: 'name'
            },
            {
              text: '昵称',
              dataField: 'nickName'
            },
            {
              text: '分组',
              dataField: 'group.name'
            },
            {
              text: '创建时间',
              dataField: 'createTime'
            },
            {
              text: '启用',
              dataField: 'enable',
              headerFormatter: (column) => {
                return <OverlayTrigger trigger="hover" overlay={<Popover>禁用后,用户将无法登录</Popover>}>
                  <span>启用 <FontAwesomeIcon icon={faQuestionCircle}/></span>
                </OverlayTrigger>
              },
              formatter: (cell, row) => {
                return <TableStatusCheckbox url={app.url('admin/admins/enable')} row={row} name="enable"/>
              }
            },
            {
              text: '操作',
              dataField: 'id',
              formatter: (id) => (
                <a href={app.curEditUrl(id)}>编辑</a>
              ),
            }
          ]}
        />
      </Page>
    )
  }
}
