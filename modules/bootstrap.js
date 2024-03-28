import $, { Ret } from 'miaoxing';
import axios from '@mxjs/axios';
import { wei, req, url } from '@mxjs/app';
import { Spin } from 'antd';
import { Loading } from '@mxjs/a-loading';
import config from 'config';
import './mxjs-preset-antd';
import getLoginPath from './get-login-path';

$.http = (...args) => axios(...args).then(res => {
  res.ret = new Ret(res.data);
  return res;
});

$.req = req.get.bind(req);
$.url = url.to.bind(url);
/**
 * @experimental
 */
$.fullUrl = url.full.bind(url);
$.apiUrl = url.api.bind(url);

window.$ = $;

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
