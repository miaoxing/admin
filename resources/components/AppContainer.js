import {hot} from 'react-hot-loader/root';
import React from 'react'
import {ConfigProvider, Spin} from 'antd';
import {Loading} from '@miaoxing/loading';
import App from "plugins/app/resources/components/App";
import Layout from '../layouts/Default';
import configs from 'data/configs/admin';

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const validateMessages = {
  required: '该项是必填的',
};

const AppContainer = () => {
  return (
    <ConfigProvider
      form={{validateMessages}}
    >
      <App defaultLayout={Layout} {...configs}/>
    </ConfigProvider>
  );
};

export default hot(AppContainer);

