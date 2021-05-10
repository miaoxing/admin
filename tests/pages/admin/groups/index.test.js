import React from 'react';
import {MemoryRouter} from 'react-router';
import $, {Ret} from 'miaoxing';
import Index from '../../../../pages/admin/groups/index';
import {app} from '@mxjs/app';
import {render, fireEvent} from '@testing-library/react';
import {bootstrap, createPromise, resetUrl, setUrl} from '@mxjs/test';

bootstrap();

describe('admin/groups', () => {
  beforeEach(function () {
    setUrl('admin/groups');
    app.page = {
      collection: 'admin/groups',
      index: true,
    };
  });

  afterEach(() => {
    resetUrl();
    app.page = {};
  });

  test('index', async () => {
    const promise = createPromise();

    $.http = jest.fn()
      .mockImplementationOnce(() => promise.resolve(Ret.new({
        code: 1,
        data: [
          {
            id: 1,
            name: '测试',
          },
        ],
      })));

    const {container, findByText} = render(<MemoryRouter>
      <Index/>
    </MemoryRouter>);

    await findByText('测试');

    await Promise.all([promise]);

    expect(container.querySelector('.btn-success').innerHTML).toBe('添 加');

    expect($.http).toMatchSnapshot();
  });

  test('delete', async () => {
    const promise = createPromise();

    $.http = jest.fn()
      .mockImplementationOnce(() => promise.resolve(Ret.new({
        code: 1,
        data: [
          {
            id: 1,
            name: '测试',
          },
        ],
      })));

    const {findByText} = render(<MemoryRouter>
      <Index/>
    </MemoryRouter>);

    await findByText('测试');

    await Promise.all([promise]);

    // Assert
    const link = await findByText('删除');

    // Arrange
    const promise2 = createPromise();
    $.confirm = jest.fn().mockImplementationOnce((message, fn) => {
      return fn(true);
    });
    $.http.mockImplementationOnce(() => promise2.resolve(Ret.new({
      code: 1,
    })));

    // Act 点击删除会有弹窗确认
    fireEvent.click(link);

    // Assert
    expect($.confirm).toBeCalledTimes(1);

    await Promise.all([promise2]);

    expect($.http).toMatchSnapshot();
  });
});
