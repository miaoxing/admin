require.config({
  paths: {
    'jquery-ui': 'https://cdn.jsdelivr.net/npm/jqueryui@1.11.1/jquery-ui.min',
    'jqueryui-timepicker-addon-datepicker-zh-CN': 'comps/jquery-ui/ui/minified/i18n/jquery.ui.datepicker-zh-CN.min',
    'jqueryui-timepicker-addon': 'plugins/admin/libs/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.min',
    'jqueryui-timepicker-addon-zh-CN': 'plugins/admin/libs/jqueryui-timepicker-addon/dist/i18n/jquery-ui-timepicker-zh-CN',
  },
  shim: {
    'jqueryui-timepicker-addon-datepicker-zh-CN': {
      deps: ['jquery-ui']
    },
    'jqueryui-timepicker-addon': {
      deps: ['jqueryui-timepicker-addon-datepicker-zh-CN']
    },
    'jqueryui-timepicker-addon-zh-CN': {
      deps: ['jqueryui-timepicker-addon']
    }
  }
});

define([
  'jqueryui-timepicker-addon-zh-CN',
  'css!plugins/admin/libs/jquery-ui-custom.css',
  'css!plugins/admin/libs/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.min'
], function () {
  $.fn.rangeDateTimePicker = function (options) {
    var startDateTextBox = $(this[0]);
    var endDateTextBox = $(this[1]);

    startDateTextBox.datetimepicker($.extend(options, {
      onClose: function (dateText, inst) {
        if (endDateTextBox.val() != '') {
          var testStartDate = startDateTextBox.datetimepicker('getDate');
          var testEndDate = endDateTextBox.datetimepicker('getDate');
          if (testStartDate > testEndDate)
            endDateTextBox.datetimepicker('setDate', testStartDate);
        } else {
          endDateTextBox.val(dateText);
        }
      },
      onSelect: function (selectedDateTime) {
        endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
      }
    }));

    endDateTextBox.datetimepicker($.extend(options, {
      onClose: function (dateText, inst) {
        if (startDateTextBox.val() != '') {
          var testStartDate = startDateTextBox.datetimepicker('getDate');
          var testEndDate = endDateTextBox.datetimepicker('getDate');
          if (testStartDate > testEndDate)
            startDateTextBox.datetimepicker('setDate', testEndDate);
        } else {
          startDateTextBox.val(dateText);
        }
      },
      onSelect: function (selectedDateTime) {
        startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
      }
    }));
  };
});
