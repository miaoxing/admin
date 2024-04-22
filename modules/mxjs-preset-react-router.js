import $ from 'miaoxing';
import { history } from '@miaoxing/app/components/RouterStore';

$.to = (url, options) => {
  if (typeof url === 'number') {
    return history.go(url);
  }

  // Generate full URL, if it is not an absolute URL
  if (url.substring(0, 1) !== '/') {
    url = $.url(url);
  }

  if (options?.replace) {
    return history.replace(url);
  }
  return history.push(url);
};
