import FormItemSort from './FormItemSort';
import {render} from '@testing-library/react';
import {Form} from 'antd';

describe('FormItemSort', () => {
  test('default', () => {
    const {container} = render(<Form><FormItemSort/></Form>);

    expect(container).toMatchSnapshot();
  });
});
