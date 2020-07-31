import {hot} from 'react-hot-loader/root';
import React from 'react'
import {ConfigProvider, Spin} from 'antd';
import {Loading} from '@mxjs/loading';
import App from "plugins/app/components/App";
import zhCN from 'antd/es/locale/zh_CN';
import Layout from './Layout';
import configs from 'storage/configs/admin';
import theme from '../modules/theme';

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const AppContainer = () => {
  return (
    <ConfigProvider
      locale={zhCN}
    >
      <App theme={theme} defaultLayout={Layout} {...configs}/>
    </ConfigProvider>
  );
};

export default hot(AppContainer);

