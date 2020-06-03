import React, {useCallback, useEffect, useRef, useState} from "react";
import {Table, TableProvider, CTableDeleteLink, withTable} from "@miaoxing/a-table";
import {CEditLink, CNewBtn} from "@miaoxing/a-clink";
import {Button} from "react-bootstrap";
import {Page, PageActions} from "@miaoxing/a-page";
import {LinkActions} from "@miaoxing/actions";
import $ from 'miaoxing';
import api from '@miaoxing/api';

export default () => {
  const [data, setData] = useState({
    hasWechatGroup: false,
  });

  useEffect(() => {
    api.curPath('metadata', {loading: true}).then(ret => setData(ret));
  }, []);

  const table = useRef();
  const handleClick = useCallback(() => {
    api.post('wechat-groups/sync-form-wechat', {loading: true}).then(ret => $.ret(ret, table.current.reload));
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
          tableRef={table}
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
