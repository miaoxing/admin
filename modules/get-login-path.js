import $ from 'miaoxing';
import {history} from '@mxjs/app';

export default (url) => {
  return $.url(url || 'admin/login', {
    next: history.location.pathname + history.location.search + history.location.hash,
  });
};
