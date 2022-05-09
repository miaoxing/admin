import {ConfigProvider, Spin} from 'antd';
import {Loading} from '@mxjs/loading';
import App from 'plugins/app/components/App';
import zhCN from 'antd/es/locale/zh_CN';
import Layout from './Layout';
import configs from 'storage/configs/admin';
import theme from '../modules/theme';
import {url, history} from '@mxjs/app';
import $ from 'miaoxing';

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const AppContainer = () => {
  if (!url.isAdmin()) {
    history.push($.url('admin'));
    // NOTE: 还未在路由器中，需主动刷新页面
    location.reload();
    return null;
  }

  return (
    <ConfigProvider
      locale={zhCN}
    >
      <App defaultLayout={Layout} configs={{theme, ...configs}}/>
    </ConfigProvider>
  );
};

export default AppContainer;

