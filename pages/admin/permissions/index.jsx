import {Table, TableActions, TableProvider, CTableDeleteLink, TableStatusCheckbox} from '@mxjs/a-table';
import {CEditLink, CNewBtn} from '@mxjs/a-clink';
import {Page, PageActions} from '@mxjs/a-page';

const Index = () => {
  return (
    <Page>
      <TableProvider>
        <PageActions>
          <CNewBtn/>
        </PageActions>

        <Table
          columns={[
            {
              title: '名称',
              dataIndex: 'name',
            },
            {
              title: '标识',
              dataIndex: 'code',
            },
            {
              title: '更新时间',
              dataIndex: 'updatedAt',
            },
            {
              title: '启用',
              dataIndex: 'isEnabled',
              render: (cell, row) => (
                <TableStatusCheckbox row={row} name="isEnabled"/>
              ),
            },
            {
              title: '操作',
              dataIndex: 'id',
              render: (id) => (
                <TableActions>
                  <CEditLink id={id}/>
                  <CTableDeleteLink id={id}/>
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
