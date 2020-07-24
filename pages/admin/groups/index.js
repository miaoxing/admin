import React, {useCallback, useEffect, useState} from "react";
import {Table, TableProvider, CTableDeleteLink, useTable} from "@miaoxing/a-table";
import {CEditLink, CNewBtn} from "@miaoxing/a-clink";
import {Button} from "react-bootstrap";
import {Page, PageActions} from "@miaoxing/a-page";
import {LinkActions} from "@miaoxing/actions";
import $ from 'miaoxing';
import http from '@miaoxing/http';

export default () => {
  const [data, setData] = useState({
    hasWechatGroup: false,
  });

  useEffect(() => {
    http.curPath('metadata', {loading: true}).then(ret => setData(ret));
  }, []);

  const [table] = useTable();
  const handleClick = useCallback(() => {
    http.post('wechat-groups/sync-form-wechat', {loading: true}).then(ret => $.ret(ret, table.reload));
  }, []);

  return (
    <Page>
      <TableProvider>
        <PageActions>
          <CNewBtn/>
          {data.hasWechatGroup && <Button variant="secondary" onClick={handleClick}>
            从微信同步分组
          </Button>}
        </PageActions>

        <Table
          tableApi={table}
          columns={[
            {
              title: '名称',
              dataIndex: 'name'
            },
            {
              title: '顺序',
              dataIndex: 'sort',
              sorter: true,
            },
            {
              title: '状态',
              dataIndex: 'wechatId',
              hideInTable: data.hasWechatGroup,
              render: text => text > 0 ? '已同步' : '未同步',
            },
            {
              title: '操作',
              dataIndex: 'id',
              render: (id) => (
                <LinkActions>
                  <CEditLink id={id}/>
                  <CTableDeleteLink id={id}/>
                </LinkActions>
              )
            },
          ]}
        />
      </TableProvider>
    </Page>
  );
}
