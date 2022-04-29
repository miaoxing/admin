import {ConfigProvider, Spin} from 'antd';
import {Loading} from '@mxjs/loading';
import App from 'plugins/app/components/App';
import zhCN from 'antd/es/locale/zh_CN';
import Layout from './Layout';
import configs from 'storage/configs/admin';
import theme from '../modules/theme';
import {url} from '@mxjs/app';
import $ from 'miaoxing';

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const AppContainer = () => {
  if (!url.isAdmin()) {
    window.location.href = $.url('admin');
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

