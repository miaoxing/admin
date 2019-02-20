/**
 * Requirejs常用模块配置
 */
window.requirejs.config({
  paths: {
    bootbox: 'assets/bootbox',
    daterangepicker: 'assets/daterangepicker',
    form: 'assets/form',
    formUpdate: 'assets/formUpdate',
    highcharts: 'assets/highcharts',
    jquery: 'comps/jquery-legacy/jquery.min',
    'jquery-deparam': 'comps/jquery-deparam/jquery-deparam.min',
    'jquery-validation': 'comps/jquery-validation/jquery.validate',
    'jquery-validation-zh': 'comps/jquery-validation/localization/messages_zh',
    loadJSON: 'comps/jquery.loadJSON/index',
    template: 'comps/artTemplate/template.min',
    validator: 'assets/validator',
    linkTo: 'plugins/link-to/js/link-to'
  },
  shim: {
    'jquery-validation-zh': {
      deps: ['jquery-validation']
    },
    'plugins/app/libs/jquery-validation-bootstrap-tooltip/jquery-validate.bootstrap-tooltip.min': {
      deps: ['jquery-validation']
    },
  }
});
