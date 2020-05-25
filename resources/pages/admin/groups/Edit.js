import React from 'react';
import {CListBtn} from "@miaoxing/a-clink";
import {Page, PageActions} from "@miaoxing/a-page";
import {Form, FormItem, FormAction} from '@miaoxing/a-form'
import {InputNumber} from 'antd';

export default class extends React.Component {
  render() {
    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>

        <Form>
          <FormItem label="名称" name="name" required/>
          <FormItem label="顺序" name="sort">
            <InputNumber className="w-100"/>
          </FormItem>
          <FormItem name="id" type="hidden"/>
          <FormAction/>
        </Form>
      </Page>
    );
  }
}
