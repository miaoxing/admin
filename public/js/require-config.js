/**
 * Requirejs常用模块配置
 *
 * @todo jquery-ui升级新版,原生支持amd
 * @todo jquery-validation等想办法简化
 */
window.requirejs.config({
  paths: {
    bootbox: 'assets/bootbox',
    daterangepicker: 'assets/daterangepicker',
    dataTable: 'assets/dataTable',
    datatables: 'comps/jquery.dataTables/jquery.dataTables',
    'datatables.bootstrap': 'assets/js/jquery.dataTables.bootstrap',
    form: 'assets/form',
    formUpdate: 'assets/formUpdate',
    highcharts: 'assets/highcharts',
    jquery: 'comps/jquery-legacy/jquery.min',
    'jquery-deparam': 'comps/jquery-deparam/jquery-deparam.min',
    'jquery-ui-core': 'comps/jquery-ui/ui/minified/jquery.ui.core.min',
    'jquery-ui-datepicker': 'comps/jquery-ui/ui/minified/jquery.ui.datepicker.min',
    'jquery-ui-datepicker-zh-CN': 'comps/jquery-ui/ui/minified/i18n/jquery.ui.datepicker-zh-CN.min',
    'jquery-ui-menu': 'comps/jquery-ui/ui/minified/jquery.ui.menu.min',
    'jquery-ui-mouse': 'comps/jquery-ui/ui/minified/jquery.ui.mouse.min',
    'jquery-ui-slider': 'comps/jquery-ui/ui/minified/jquery.ui.slider.min',
    'jquery-ui-widget': 'comps/jquery-ui/ui/minified/jquery.ui.widget.min',
    'jquery-validation': 'comps/jquery-validation/jquery.validate',
    'jquery-validation-zh': 'comps/jquery-validation/localization/messages_zh',
    'jqueryui-timepicker-addon': 'comps/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.min',
    'jqueryui-timepicker-addon-zh-CN': 'comps/jqueryui-timepicker-addon/dist/i18n/jquery-ui-timepicker-zh-CN',
    moment: 'comps/moment/min/moment.min',
    loadJSON: 'comps/jquery.loadJSON/index',
    template: 'comps/artTemplate/template.min',
    validator: 'assets/validator',
    // 插件
    linkTo: 'plugins/link-to/js/link-to'
  },
  shim: {
    'datatables.bootstrap': {
      deps: ['datatables']
    },
    'jquery-ui-datepicker': {
      deps: ['jquery-ui-core']
    },
    'jquery-ui-datepicker-zh-CN': {
      deps: ['jquery-ui-datepicker']
    },
    'jquery-ui-mouse': {
      deps: ['jquery-ui-widget']
    },
    'jquery-ui-slider': {
      deps: ['jquery-ui-core', 'jquery-ui-mouse', 'jquery-ui-widget']
    },
    'jquery-validation-zh': {
      deps: ['jquery-validation']
    },
    'plugins/app/libs/jquery-validation-bootstrap-tooltip/jquery-validate.bootstrap-tooltip.min': {
      deps: ['jquery-validation']
    },
    'jqueryui-timepicker-addon': {
      deps: ['jquery-ui-datepicker-zh-CN', 'jquery-ui-slider']
    },
    'jqueryui-timepicker-addon-zh-CN': {
      deps: ['jqueryui-timepicker-addon']
    }
  }
});
