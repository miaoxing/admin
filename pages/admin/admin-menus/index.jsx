import {
  CTableDeleteLink,
  Table,
  TableActions,
  TableExpandIcon,
  TableProvider,
  TableStatusCheckbox,
  useExpand,
  useTable
} from '@mxjs/a-table';
import { CEditLink, CNewBtn } from '@mxjs/a-clink';
import { Page, PageActions } from '@mxjs/a-page';
import { Button } from '@mxjs/a-button';
import { useMutation } from '@mxjs/query';
import usePage from '../../../modules/use-page';
import MenuIcon from '../../../components/MenuIcon';

export default () => {
  const [table] = useTable();
  const { mutate } = usePage();
  const { expanded, onExpand, expandedRowKeys, setData, onExpandAll } = useExpand();

  // 删除后重新加载菜单
  const handleDelete = () => {
    table.reload();
    mutate();
  };

  const { trigger, isMutating } = useMutation('admin-menus/reset');

  const handleClickReset = async () => {
    const result = await $.confirm('已有的菜单将被清空，确定重置？');
    if (!result) {
      return;
    }

    await trigger();
    table.reload();
    mutate();
  };

  return (
    <Page>
      <TableProvider>
        <PageActions>
          <CNewBtn/>
          <Button permission="admin/admin-menus#reset" onClick={handleClickReset} loading={isMutating}>重置</Button>
        </PageActions>

        <Table
          tableApi={table}
          expandedRowKeys={expandedRowKeys}
          onExpand={onExpand}
          postData={(data) => {
            setData(data);
            return data;
          }}
          pagination={{
            pageSize: 500,
          }}
          columns={[
            {
              title: (
                <>
                  <TableExpandIcon expanded={expanded} onExpand={onExpandAll}/>
                  名称
                </>
              ),
              dataIndex: 'label',
            },
            {
              title: '链接',
              dataIndex: 'url',
            },
            {
              title: '图标',
              dataIndex: 'icon',
              renderText: (cell) => {
                return (
                  <MenuIcon src={cell} className="text-2xl"/>
                );
              }
            },
            {
              title: '顺序',
              dataIndex: 'sort',
            },
            {
              title: '显示',
              dataIndex: 'isShow',
              render: (cell, row) => (
                <TableStatusCheckbox row={row} name="isShow"/>
              ),
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
                  <CTableDeleteLink id={id} onDelete={handleDelete}/>
                </TableActions>
              ),
            },
          ]}
        />
      </TableProvider>
    </Page>
  );
};
