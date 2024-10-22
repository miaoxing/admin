import $, { Ret } from 'miaoxing';
import axios from '@mxjs/axios';

$.http = (...args) => axios(...args).then(res => {
  res.ret = new Ret(res.data);

  // 允许出错时提示错误，并中断后续流程
  if (res.ret.isErr() && res.config.throw) {
    $.ret(res.ret);
    return new Promise(() => {});
  }

  return res;
});