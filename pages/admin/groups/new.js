/**
 * @share [id]/edit
 */
import {useEffect, useState} from 'react';
import { CListBtn } from '@mxjs/a-clink';
import {Page, PageActions} from '@mxjs/a-page';
import {Form, FormItem, FormAction, Select} from '@mxjs/a-form';
import {FormItemSort} from '@miaoxing/admin';
import api from '@mxjs/api';

const New = () => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    api.getMaxCurColl({loading: true}).then(({ret}) => {
      setParents(ret.data);
    });
  }, []);

  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <FormItem label="父级分组" name="parentId">
          <Select options={parents} labelKey="name" valueKey="id" firstLabel="根分组" firstValue=""/>
        </FormItem>
        <FormItem label="名称" name="name" required/>
        <FormItemSort/>
        <FormItem name="id" type="hidden"/>
        <FormAction/>
      </Form>
    </Page>
  );
};

export default New;
