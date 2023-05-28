import FormItemSort from './FormItemSort';
import {render} from '@testing-library/react';
import {ConfigProvider, Form} from 'antd';

describe('FormItemSort', () => {
  test('default', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <Form><FormItemSort/></Form>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
