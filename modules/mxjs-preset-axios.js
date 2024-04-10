import $, { Ret } from 'miaoxing';
import axios from '@mxjs/axios';

$.http = (...args) => axios(...args).then(res => {
  res.ret = new Ret(res.data);
  return res;
});