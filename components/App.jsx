import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { RouterProvider } from 'react-router-dom';
import $ from 'miaoxing';
import { wei } from '@mxjs/app';
import PropTypes from 'prop-types';
import { ConfigProvider } from '@mxjs/config';
import { extendTheme, ThemeProvider } from '@chakra-ui/react';

const loadConfig = async () => {
  const { ret } = await $.get('js-config');
  if (ret.isErr()) {
    $.ret(ret);
    return;
  }
  return ret;
};

const App = ({ router, theme: appTheme = {} }) => {
  const [theme, setTheme] = useState(appTheme);

  // 从后端加载的配置
  const [config, setConfig] = useState({ page: {} });

  useAsyncEffect(async () => {
    const ret = await loadConfig();
    wei.setConfigs(ret.data);
    setConfig(ret.data);
    setTheme(extendTheme(ret.data.theme, theme));
    document.title = ret.data.page.title;
  }, []);

  return (
    <ConfigProvider config={config}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ConfigProvider>
  );
};

App.propTypes = {
  router: PropTypes.object,
  theme: PropTypes.object,
};

export default App;
