import $ from 'miaoxing';
import { navigate } from '@miaoxing/app/components/RouterStore';

$.to = (url, options) => {
  if (typeof url === 'number') {
    return navigate(url);
  }

  // Generate full URL, if it is not an absolute URL
  if (url.substring(0, 1) !== '/') {
    url = $.url(url);
  }

  if (options?.replace) {
    return navigate(url, {replace: true});
  }
  return navigate(url);
};
