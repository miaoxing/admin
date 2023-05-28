import Avatar from './Avatar';
import {render} from '@testing-library/react';
import {ConfigProvider} from 'antd';

describe('Avatar', () => {
  test('default', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <Avatar user={{}}/>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('custom', () => {
    const {container} = render(
      <ConfigProvider theme={{hashed: false}}>
        <Avatar user={{avatar: 'abc.png'}}/>
      </ConfigProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
