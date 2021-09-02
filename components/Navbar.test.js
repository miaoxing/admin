import Navbar from './Navbar';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {history} from '@mxjs/app';
import $, {Ret} from 'miaoxing';
import {MemoryRouter} from 'react-router';
import {bootstrap} from '@mxjs/test';

bootstrap();

describe('Navbar', () => {
  test('logout', async () => {
    $.http = jest.fn().mockResolvedValueOnce({
      ret: Ret.suc(),
    });

    history.push = jest.fn();

    const result = render(<MemoryRouter>
      <Navbar user={{
        username: '测试用户名',
      }}/>
    </MemoryRouter>);

    fireEvent.mouseOver(result.getByText('测试用户名'));

    const logout = await result.findByText('退出登录');
    fireEvent.click(logout);

    await waitFor(() => {
      expect(history.push).toBeCalled();
    });

    expect($.http).toMatchSnapshot();
    expect(history.push).toMatchSnapshot();
  });
});
