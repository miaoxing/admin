import InputPrice from './InputPrice';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('InputPrice', () => {
  test('default', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <InputPrice/>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
