import modal from 'modal';
import $ from 'jquery';

$.alert = modal.alert;
$.confirm = function (message, fn) {
  modal(message, function (result) {
    result && fn();
  });
};
