import $ from 'jquery';
import modal from 'modal';
import React from "react";

// 后台指定使用primary
function processMessage(message) {
  if (typeof message === 'string' || React.isValidElement(message)) {
    return {
      content: message,
      okType: 'primary',
    };
  }

  if (typeof message === 'object' && typeof message.okType === 'undefined') {
    message.okType = 'primary';
  }

  return message;
}

$.alert = (message, fn) => modal.alert(processMessage(message)).then(fn);
$.confirm = (message, fn) => modal(processMessage(message)).then(fn);
