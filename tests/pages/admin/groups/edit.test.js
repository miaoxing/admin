import $, {Ret} from 'miaoxing';
import Form from '../../../../pages/admin/groups/new';
import {app} from '@mxjs/app';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import {bootstrap, createPromise, resetUrl, setUrl} from '@mxjs/test';

bootstrap();

describe('admin/groups', () => {
  beforeEach(function () {
    setUrl('admin/groups/new');
    app.page = {
      collection: 'admin/groups',
      index: false,
    };
  });

  afterEach(() => {
    resetUrl();
    app.page = {};
  });

  test('form', async () => {
    const promise = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();

    $.http = jest.fn()
      // 读取默认数据
      .mockImplementationOnce(() => promise.resolve({
        ret: Ret.suc({
          data: {
            id: 1,
            sort: 50,
          },
        }),
      }))
      .mockImplementationOnce(() => promise2.resolve({
        ret: Ret.suc({
          data: [],
        }),
      }))
      .mockImplementationOnce(() => promise3.resolve({
        ret: Ret.suc({
          data: [],
        }),
      }));

    const {getByLabelText} = render(<MemoryRouter>
      <Form/>
    </MemoryRouter>);

    await Promise.all([promise]);

    // 看到表单加载了数据
    await waitFor(() => expect(getByLabelText('顺序').value).toBe('50'));
    expect(getByLabelText('名称').value).toBe('');

    // 提交表单
    fireEvent.change(getByLabelText('名称'), {target: {value: '测试分组'}});
    fireEvent.click(screen.getByText('提 交'));

    await Promise.all([promise2]);
    expect($.http).toMatchSnapshot();
  });
});
