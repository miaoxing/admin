import $ from 'miaoxing';
import { isValidElement } from 'react';
import { message, modal } from '../components/AntdApp';

const loadingOptions = {
  content: '加载中...',
  duration: 0,
  delay: 300,
  minimum: 500,
};

let count = 0;
const first = (fn) => {
  count++;
  if (count === 1) {
    fn();
  }
};
const last = (fn) => {
  if (count > 0) {
    count--;
  }
  if (count === 0) {
    fn();
  }
};

let loading;
let loadingTimeout;
let loadingStartTime = 0;

function showLoading() {
  first(() => {
    loadingTimeout = setTimeout(() => {
      loading = message.loading({ content: loadingOptions.content, duration: loadingOptions.duration });
      loadingStartTime = Date.now();
    }, loadingOptions.delay);
  });
}

function hideLoading() {
  last(() => {
    // 如果还没显示，则取消显示
    clearTimeout(loadingTimeout);
    // 延迟关闭
    setTimeout(() => {
      loading && loading();
    }, Math.max(0, loadingOptions.minimum - (Date.now() - loadingStartTime)));
  });
}

$.loading = (options) => {
  switch (options) {
    case 'show':
      return showLoading();

    case 'hide':
      return hideLoading();

    default:
      if (typeof options === 'string' || isValidElement(options)) {
        options = { content: options };
      }
      return message.loading({ ...loadingOptions, ...options });
  }
};

function confirm(config, type = 'confirm') {
  if (typeof config.content === 'undefined') {
    config = { content: config };
  }

  let currentConfig = addPromise({ ...config, show: true });

  let ok;
  let cancel;
  let callback;
  const result = new Promise(resolve => {
    callback = resolve;
  });
  result.ok = fn => {
    ok = fn;
    return result;
  };
  result.cancel = fn => {
    cancel = fn;
    return result;
  };

  function addPromise(config) {
    const onOk = config.onOk;
    config.onOk = () => {
      callback(true);
      const result = ok && ok();
      const result2 = onOk && onOk();
      return result || result2;
    };

    const onCancel = config.onCancel;
    config.onCancel = () => {
      callback(false);
      const result = cancel && cancel();
      const result2 = onCancel && onCancel();
      return result || result2;
    };

    return config;
  }

  const confirmResult = modal[type](currentConfig);

  result.destroy = confirmResult.destroy;
  result.update = confirmResult.update;

  return result;
}

$.alert = (message, fn) => confirm(message, 'info').then(fn);
$.confirm = (message, fn) => confirm(message).then(fn);

$.suc = (...args) => message.success(...args);
$.err = (...args) => message.error(...args);
$.ret = (ret, duration, callback) => {
  const result = $[ret.code === 0 ? 'suc' : 'err'](ret.message, duration, callback);

  let suc;
  result.suc = fn => {
    suc = fn;
    return result;
  };

  let err;
  result.err = fn => {
    err = fn;
    return result;
  };

  result.then(() => {
    if (ret.code === 0 && suc) {
      suc();
    }
    if (ret.code !== 0 && err) {
      err();
    }
  });

  return result;
};