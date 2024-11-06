import $, { Ret } from 'miaoxing';
import axios from '@mxjs/axios';

$.http = async (urlOrConfig, config) => {
  if (typeof urlOrConfig === 'string') {
    config = config || {};
    config.url = urlOrConfig;
  } else {
    config = urlOrConfig;
  }

  // 设置了 suspense 则启用加载和错误处理
  if (config.suspense) {
    config.loading = true;
    config.throw = true;
  }

  const res = await axios(config);
  res.ret = new Ret(res.data);

  // 允许出错时提示错误，并中断后续流程
  // @experimental
  if (res.ret.isErr() && res.config.throw) {
    $.ret(res.ret);
    return new Promise(() => {
    });
  }

  return res;
};
