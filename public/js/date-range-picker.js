define([
  'comps/moment/min/moment.min',
  'plugins/admin/libs/bootstrap-daterangepicker/daterangepicker',
  'css!plugins/admin/libs/bootstrap-daterangepicker/daterangepicker-bs3'
], function (moment) {
  var now = moment();
  var defaults = {
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '2013.01.01',
    maxDate: '2020.12.31',
    dateLimit: {days: 60},
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
      '今天': [now, now],
      '本周': [moment().startOf('isoweek'), moment().endOf('isoweek')],
      /*'昨天': [moment().subtract(1, 'days'), moment().subtract('days', 1)],*/
      '过去7天': [moment().subtract(6, 'days'), now],
      '过去30天': [moment().subtract(29, 'days'), now],
      '本月': [moment().startOf('month'), moment().endOf('month')],
      /*'上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, month).endOf('month')]*/
      '本季度': [moment().startOf('quarter'), moment().endOf('quarter')]
    },
    opens: 'right',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'YYYY.MM.DD',
    separator: '~',
    locale: {
      applyLabel: '确定',
      cancelLabel: '取消',
      fromLabel: '从',
      toLabel: '到',
      customRangeLabel: '自定义范围',
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      firstDay: 0,
      weekLabel: '周'
    }
  };

  var orig = $.fn.daterangepicker;
  $.fn.daterangepicker = function (options, cb) {
    options = $.extend(defaults, options);
    return orig.call(this, options, cb);
  }
});
