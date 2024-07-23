import { ConfigProvider } from 'antd';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { url } from '@mxjs/app';
import AntdApp from './AntdApp';
import router from '../modules/router';

const AppContainer = () => {
  // 如果不在 /admin 下，跳转到 /admin
  if (!url.isAdmin()) {
    window.location.href = import.meta.env.BASE_URL + 'admin';
    return ;
  }

  return (
    <ConfigProvider locale={zhCN}>
      <AntdApp component={false}>
        <App router={router}/>
      </AntdApp>
    </ConfigProvider>
  );
};

export default AppContainer;
