import axios from 'axios';
import 'plugins/app/modules/bootstrap';
import { wei } from '@mxjs/app';
import config from 'config';
import getLoginPath from './get-login-path';
import { Spin } from 'antd';
import { Loading } from '@mxjs/a-loading';

wei.setConfigs(config);

// 指定 Antd 全局的 loading 样式
Spin.setDefaultIndicator(<Loading/>);

const UNAUTHORIZED_CODE = 401;
const TIPS_DELAY = 3000;

let running = false;
const runFirst = async (fn, timeout) => {
  if (!running) {
    running = true;
    setTimeout(fn, timeout);
  } else {
    // 后面的请求不返回
    await new Promise(() => {
    });
  }
};

axios.interceptors.response.use(async response => {
  if (response.data?.code === UNAUTHORIZED_CODE) {
    // 控制未登录错误只提示一个
    await runFirst(() => {
      window.location.href = getLoginPath(response.data.next);
    }, TIPS_DELAY);
  }
  return response;
});
