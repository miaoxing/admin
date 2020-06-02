import React from 'react';
import {CListBtn} from "@miaoxing/a-clink";
import {Page, PageActions} from "@miaoxing/a-page";
import {Form, FormItem, FormAction} from '@miaoxing/a-form'

export default () => {
  return (
    <Page>
      <PageActions>
        <CListBtn/>
      </PageActions>

      <Form>
        <FormItem label="名称" name="name" required/>
        <FormItem label="顺序" name="sort" type="number"/>
        <FormItem name="id" type="hidden"/>
        <FormAction/>
      </Form>
    </Page>
  );
}
