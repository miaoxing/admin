(function (root, $) {
  $.alert = function (message, callback) {
    requirejs(['bootbox'], function (bootbox) {
      bootbox.alert(message, callback);
    });
  };

  $.confirm = function (message, fn) {
    requirejs(['bootbox'], function (bootbox) {
      bootbox.confirm(message, function (result) {
        result && fn();
      });
    });
  };
}(window, jQuery));
