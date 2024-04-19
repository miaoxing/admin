import { ConfigProvider } from '@mxjs/config';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import App from 'plugins/app/components/App';
import zhCN from 'antd/es/locale/zh_CN';
import Layout from './Layout';
import configs from 'storage/configs/admin';
import theme from '../modules/theme';
import { url } from '@mxjs/app';
import $ from 'miaoxing';
import AntdApp from './AntdApp';

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
          <App defaultLayout={Layout} configs={{theme, ...configs}}/>
        </AntdApp>
      </AntdConfigProvider>
    </ConfigProvider>
  );
};

export default AppContainer;
