import { ConfigProvider } from '@mxjs/config';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import theme from '../modules/theme';
import { url } from '@mxjs/app';
import $ from 'miaoxing';
import AntdApp from './AntdApp';
import router from '../modules/router';

const AppContainer = () => {
  if (!url.isAdmin()) {
    $.to('admin');
    // NOTE: 还未在路由器中，需主动刷新页面
    window.location.reload();
    return null;
  }

  return (
    <ConfigProvider>
      <AntdConfigProvider locale={zhCN}>
        <AntdApp component={false}>
          <App router={router} configs={{theme}}/>
        </AntdApp>
      </AntdConfigProvider>
    </ConfigProvider>
  );
};

export default AppContainer;
