import React from 'react';
import {CListBtn} from "@miaoxing/clink";
import {Page, PageActions} from "@miaoxing/page";
import {AForm, AFormItem, AFormAction} from '@miaoxing/form'
import {InputNumber} from 'antd';

export default class extends React.Component {
  render() {
    return (
      <Page>
        <PageActions>
          <CListBtn/>
        </PageActions>

        <AForm>
          <AFormItem label="名称" name="name" required/>
          <AFormItem label="顺序" name="sort">
            <InputNumber className="w-100"/>
          </AFormItem>
          <AFormItem name="id" type="hidden"/>
          <AFormAction/>
        </AForm>
      </Page>
    );
  }
}
