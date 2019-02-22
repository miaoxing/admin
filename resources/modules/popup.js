import {alert, confirm} from 'bootprompt';
import $ from 'jquery';

$.alert = alert;
$.confirm = function (message, fn) {
  confirm(message, function (result) {
    result && fn();
  });
};
