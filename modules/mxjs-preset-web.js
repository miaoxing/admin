import $ from 'miaoxing';
import { req, url } from '@mxjs/app';

$.req = req.get.bind(req);
$.url = url.to.bind(url);

/**
 * @experimental
 */
$.fullUrl = url.full.bind(url);
$.apiUrl = url.api.bind(url);

$.to = (url, options) => {
  if (typeof url === 'number') {
    return history.go(url);
  }

  // Generate full URL, if it is not an absolute URL
  if (url.substring(0, 1) !== '/') {
    url = $.url(url);
  }

  if (options?.replace) {
    return window.location.replace(url);
  }
  return window.location.href = url;
};