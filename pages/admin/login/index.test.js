import Index from './index';
import $, {Ret} from 'miaoxing';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {bootstrap, resetUrl, setUrl} from '@mxjs/test';
import {app} from '@mxjs/app';

bootstrap();

describe('login', () => {
  beforeEach(() => {
    setUrl('admin/login');
    app.page = {
      collection: 'admin/login',
      index: false,
    };
  });

  afterEach(() => {
    resetUrl();
    app.page = {};
  });

  test('suc', async () => {
    $.http = jest.fn().mockResolvedValueOnce({
      ret: Ret.suc({
        token: 'test',
      }),
    });

    window.localStorage = jest.fn();

    const {container, ...result} = render(<Index/>);

    fireEvent.change(result.getByPlaceholderText('用户名'), {target: {value: 'admin'}});
    fireEvent.change(result.getByPlaceholderText('密码'), {target: {value: 'password'}});
    fireEvent.click(result.getByText('登 录'));

    await waitFor(() => {
      expect($.http).toBeCalled();
    });

    expect($.http).toMatchSnapshot();
    expect(window.localStorage).toMatchSnapshot();
    expect(window.location.href).toBe('/admin');
  });
});
