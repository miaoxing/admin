(function (root, $) {
  $.alert = function (message, callback) {
    requirejs(['plugins/app/libs/bootbox/bootbox'], function (bootbox) {
      bootbox.alert(message, callback);
    });
  };

  $.confirm = function (message, fn) {
    requirejs(['plugins/app/libs/bootbox/bootbox'], function (bootbox) {
      bootbox.confirm(message, function (result) {
        result && fn();
      });
    });
  };
}(window, jQuery));
