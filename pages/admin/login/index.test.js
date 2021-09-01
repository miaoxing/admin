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

  const login = async () => {
    const {container, ...result} = render(<Index/>);

    fireEvent.change(result.getByPlaceholderText('用户名'), {target: {value: 'admin'}});
    fireEvent.change(result.getByPlaceholderText('密码'), {target: {value: 'password'}});
    fireEvent.click(result.getByText('登 录'));

    await waitFor(() => {
      expect($.http).toBeCalled();
    });
  };

  test('suc', async () => {
    $.http = jest.fn().mockResolvedValueOnce({
      ret: Ret.suc({
        token: 'test',
      }),
    });

    window.localStorage = jest.fn();

    await login();

    expect($.http).toMatchSnapshot();
    expect(window.localStorage).toMatchSnapshot();
    expect(window.location.href).toBe('/admin');
  });

  test('suc and redirect', async () => {
    setUrl('admin/login?next=/admin/password');

    $.http = jest.fn().mockResolvedValueOnce({
      ret: Ret.suc({
        token: 'test',
      }),
    });

    await login();

    expect(window.location.href).toBe('/admin/password');
  });

  test('err', async () => {
    $.http = jest.fn().mockResolvedValueOnce({
      ret: Ret.err('测试登录失败'),
    });

    await login();

    expect($.http).toMatchSnapshot();
    expect(window.location.href).toBe('http://localhost/admin/login');
  });
});
