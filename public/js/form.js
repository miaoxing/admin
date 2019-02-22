define([
  'plugins/app/libs/jquery-form/jquery.form',
  'comps/jquery.loadJSON/index',
  'plugins/admin/js/form-update',
  'plugins/app/libs/jquery-unparam/jquery-unparam.min'
], function () {
  // require jquery-unparam
  $.fn.loadParams = function () {
    return this.loadJSON($.unparam(location.search.substring(1)));
  };

  // require jquery-unparam
  $.queryUrl = function (url, args) {
    var params = $.unparam(location.search.substring(1));
    return $.url(url, typeof args != 'undefined' ? args : params, args);
  };

  var Form = function () {
  };
  $.extend(Form.prototype, {
    findInJson: function (elem, json) {
      for (var i in json) {
        if (elem == json[i]) {
          return true;
        }
      }
      return false;
    },
    getPrefixWithLevel: function (elem) {
      if (typeof(elem['level']) == "undefined" || elem['level'] == 0) {
        return '';
      } else {
        var str = '|';
        for (var i = 0; i < elem['level']; i++) {
          str += '--';
        }
        return str;
      }
    },
    toOptions: function ($el, options, value, key, selected) {
      var html = '';
      for (var i in options) {
        if (typeof(selected) == "undefined" || !this.findInJson(options[i][value], selected)) {
          html += '<option value="' + options[i][value] + '" ' + '>' + this.getPrefixWithLevel(options[i]) + options[i][key] + '</option>';
        } else {
          html += '<option value="' + options[i][value] + '" ' + ' selected>' + this.getPrefixWithLevel(options[i]) + options[i][key] + '</option>';
        }
      }

      $el.append(html);
    }
  });
  return new Form;
});
