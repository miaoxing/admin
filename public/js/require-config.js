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
    'jquery-validation': 'comps/jquery-validation/jquery.validate',
    'jquery-validation-zh': 'comps/jquery-validation/localization/messages_zh',
    moment: 'comps/moment/min/moment.min',
    loadJSON: 'comps/jquery.loadJSON/index',
    template: 'comps/artTemplate/template.min',
    validator: 'assets/validator',
    linkTo: 'plugins/link-to/js/link-to'
  },
  shim: {
    'datatables.bootstrap': {
      deps: ['datatables']
    },
    'jquery-validation-zh': {
      deps: ['jquery-validation']
    },
    'plugins/app/libs/jquery-validation-bootstrap-tooltip/jquery-validate.bootstrap-tooltip.min': {
      deps: ['jquery-validation']
    },
  }
});
