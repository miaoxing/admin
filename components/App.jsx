import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { RouterProvider } from 'react-router-dom';
import $ from 'miaoxing';
import { wei } from '@mxjs/app';
import PropTypes from 'prop-types';
import { ConfigProvider } from '@mxjs/config';

const loadConfig = async () => {
  const { ret } = await $.get('js-config');
  if (ret.isErr()) {
    $.ret(ret);
    return;
  }
  return ret;
};

const App = ({ router}) => {
  // 从后端加载的配置
  const [config, setConfig] = useState({ page: {} });

  useAsyncEffect(async () => {
    const ret = await loadConfig();
    wei.setConfigs(ret.data);
    setConfig(ret.data);
    document.title = ret.data.page.title;
  }, []);

  return (
    <ConfigProvider config={config}>
      <RouterProvider router={router}/>
    </ConfigProvider>
  );
};

App.propTypes = {
  router: PropTypes.object,
};

export default App;
