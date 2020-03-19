import {hot} from 'react-hot-loader/root';
import React from 'react'
import App from "plugins/app/resources/components/App";
import {ConfigProvider, Spin} from 'antd';
import {Loading} from '@miaoxing/loading';
import Layout from '../layouts/Default';
import configs from 'data/configs/admin';

configs.defaultLayout = Layout;
configs.layout = {
  '/admin/login': React.Fragment,
};

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const AppContainer = () => {
  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <App {...configs}/>
    </ConfigProvider>
  );
};

export default hot(AppContainer);

