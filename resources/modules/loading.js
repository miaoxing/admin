import message from 'comps/react-bootstrap-message/js/react-bootstrap-message';

let result = null;
$.loading = function (options) {
  switch (options) {
    case 'hide':
      return result();

    case 'show':
    default:
      result = message.loading();
      return result;
  }
};
