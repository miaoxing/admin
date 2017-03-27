(function (root, $) {
  $.alert = function (message, callback) {
    require(['bootbox'], function (bootbox) {
      bootbox.alert(message, callback);
    });
  };

  $.confirm = function (message, fn) {
    require(['bootbox'], function (bootbox) {
      bootbox.confirm(message, function (result) {
        result && fn();
      });
    });
  };
}(window, jQuery));
