(function (root, $) {
  $.alert = function (message, callback) {
    requirejs(['plugins/app/js/bootbox'], function (bootbox) {
      bootbox.alert(message, callback);
    });
  };

  $.confirm = function (message, fn) {
    requirejs(['plugins/app/js/bootbox'], function (bootbox) {
      bootbox.confirm(message, function (result) {
        result && fn();
      });
    });
  };
}(window, jQuery));
