import $ from 'jquery';
import bootbox from 'bootbox';
import 'bootbox/src/locales/zh_CN';

bootbox.setDefaults({
  locale: 'zh_CN',
  centerVertical: true,
});

$.alert = (message, callback) => {
  return bootbox.alert(message, callback);
};

$.confirm = (message, fn) => {
  return bootbox.confirm(message, function (result) {
    result && fn();
  });
};
