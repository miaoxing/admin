define([
  'plugins/admin/libs/jquery.dataTables/jquery.dataTables',
  'template',
  'jquery-unparam',
], function () {
  //http://datatables.net/plug-ins/pagination#bootstrap
  // Start Bootstrap
  $.extend(true, $.fn.dataTable.defaults, {
    "sDom": "T<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
    "sPaginationType": "bootstrap",
    "oLanguage": {
      "sLengthMenu": "Display _MENU_ records"
    }
  });

  /* API method to get paging information */
  $.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
      "iStart": oSettings._iDisplayStart,
      "iEnd": oSettings.fnDisplayEnd(),
      "iLength": oSettings._iDisplayLength,
      "iTotal": oSettings.fnRecordsTotal(),
      "iFilteredTotal": oSettings.fnRecordsDisplay(),
      "iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
      "iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
    };
  };

  /* Bootstrap style pagination control */
  $.extend($.fn.dataTableExt.oPagination, {
    "bootstrap": {
      "fnInit": function (oSettings, nPaging, fnDraw) {
        var oLang = oSettings.oLanguage.oPaginate;
        var fnClickHandler = function (e) {
          e.preventDefault();
          if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
            fnDraw(oSettings);
          }
        };

        $(nPaging).append(
          '<ul class="pagination">' +
          '<li class="page-item prev disabled"><a class="page-link" href="#"><i class="fa fa-angle-double-left"></i></a></li>' +
          '<li class="page-item prev disabled"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>' +
          '<li class="page-item next disabled"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>' +
          '<li class="page-item next disabled"><a class="page-link" href="#"><i class="fa fa-angle-double-right"></i></a></li>' +
          '</ul>'
        );
        var els = $('a', nPaging);
        $(els[0]).bind('click.DT', {action: "first"}, fnClickHandler);
        $(els[1]).bind('click.DT', {action: "previous"}, fnClickHandler);
        $(els[2]).bind('click.DT', {action: "next"}, fnClickHandler);
        $(els[3]).bind('click.DT', {action: "last"}, fnClickHandler);
      },

      "fnUpdate": function (oSettings, fnDraw) {
        var iListLength = 5;
        var oPaging = oSettings.oInstance.fnPagingInfo();
        var an = oSettings.aanFeatures.p;
        var i, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

        if (oPaging.iTotalPages < iListLength) {
          iStart = 1;
          iEnd = oPaging.iTotalPages;
        } else if (oPaging.iPage <= iHalf) {
          iStart = 1;
          iEnd = iListLength;
        } else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
          iStart = oPaging.iTotalPages - iListLength + 1;
          iEnd = oPaging.iTotalPages;
        } else {
          iStart = oPaging.iPage - iHalf + 1;
          iEnd = iStart + iListLength - 1;
        }

        for (i = 0, iLen = an.length; i < iLen; i++) {
          // Remove the middle elements
          $('li:gt(1)', an[i]).filter(':not(.next)').remove();

          // Add the new list items and their event handlers
          for (j = iStart; j <= iEnd; j++) {
            sClass = (j == oPaging.iPage + 1) ? 'class="page-item active"' : 'class="page-item"';
            $('<li ' + sClass + '><a class="page-link" href="#">' + j + '</a></li>')
              .insertBefore($('li.next:first', an[i])[0])
              .bind('click', function (e) {
                e.preventDefault();
                oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
                fnDraw(oSettings);
              });
          }

          // Add / remove disabled classes from the static elements
          if (oPaging.iPage === 0) {
            $('li.prev', an[i]).addClass('disabled');
          } else {
            $('li.prev', an[i]).removeClass('disabled');
          }

          if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
            $('li.next', an[i]).addClass('disabled');
          } else {
            $('li.next', an[i]).removeClass('disabled');
          }
        }
      }
    }
  });
  // End Bootstrap

  // 附加参数到指定的URL中
  $.updateUrl = function (url, params) {
    // 1. 合并URL中的参数和外部参数
    var data = {};
    var queries = $.getParams(url);
    params = $.extend(queries, params);
    $.each(params, function (key, val) {
      val && (data[key] = val);
    });

    // 2. 将参数附加到原来的路径
    var index = url.indexOf('?');
    if (index != -1) {
      url = url.substr(0, index);
    }
    return $.appendUrl(url, data);
  };

  // 获取URL中的查询字符串
  $.getParams = function (url) {
    var a = document.createElement('a');
    a.href = url;
    return a.search.length > 0 ? $.unparam(a.search.substring(1)) : {};
  };

  // 创建一个DataTable,当数据更新时,请求参数会更新到地址栏中
  $.fn.statefulDataTable = function (options) {
    var page = $.req('page');
    var rows = $.req('rows');
    options.displayLength = rows || $.fn.dataTable.defaults.lengthMenu[0];
    options.displayStart = page < 1 ? 0 : (page - 1) * options.displayLength;

    var first = true;
    var origFnPreDrawCallback = options.fnPreDrawCallback;
    options.fnPreDrawCallback = function (settings) {
      if (origFnPreDrawCallback) {
        origFnPreDrawCallback.apply(this, arguments);
      }

      // 1. 首次加载不更改地址
      if (first) {
        first = false;
        return;
      }

      // 2. 获取分页和每页显示数量
      var params = $.getParams(settings.ajax.url);
      // URL中可能有老的参数,需要先计算出页面数和行数,覆盖原来的参数
      params.page = Math.ceil(settings._iDisplayStart / settings._iDisplayLength) + 1;
      if (params.page == 1) {
        delete params.page;
      }
      params.rows = settings._iDisplayLength;
      if (params.rows == $.fn.dataTable.defaults.lengthMenu[0]) {
        delete params.rows;
      }

      // 附加参数到原来的地址
      var url = $.updateUrl(window.location.pathname, params);
      history.replaceState({}, document.title, url);
    };
    return $(this).dataTable(options);
  };

  // Reload dataTables with extra parameters
  $.extend(true, $.fn.dataTable.defaults, {
    dom: "t<'row'<'col-sm-4'ir><'col-sm-8'pl>>",
    processing: true,
    serverSide: true,
    autoWidth: false,
    dataSrc: 'data',
    lengthMenu: [10, 25, 50, 100, 500, 1000],
    columnDefs: [
      {
        targets: ['_all'],
        sortable: false
      }
    ],
    ajax: {
      dataSrc: 'data',
      data: function (data) {
        var params = {};
        $.each(data, function (key, val) {
          params[val.name] = val.value;
        });
        var newParams = {
          rows: params.iDisplayLength,
          page: params.iDisplayStart / params.iDisplayLength + 1,
          // 指定排序
          sort: params['mDataProp_' + params.iSortCol_0],
          order: params.sSortDir_0
        };
        data.length = 0;
        return newParams;
      },
      beforeSend: function (jqXHR, settings) {
        var origSuccess = settings.success;
        settings.success = function (json) {
          // 允许后台返回错误提示,如权限不足
          if (json.code < 1) {
            $.msg(json);
            return;
          }
          if (undefined == json.iTotalRecords) {
            json.iTotalRecords = json.records;
          }
          if (undefined == json.iTotalDisplayRecords) {
            json.iTotalDisplayRecords = json.records;
          }
          origSuccess.apply(this, arguments)
        }
      }
    },
    language: {
      emptyTable: '暂无记录',
      sProcessing: "加载中...",
      sLengthMenu: "每页 _MENU_ 项结果",
      sZeroRecords: '暂无记录',
      sInfo: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
      sInfoEmpty: "显示第 0 至 0 项结果，共 0 项",
      sInfoFiltered: "(由 _MAX_ 项结果过滤)",
      sInfoPostFix: "",
      sInfoThousands: ' ',
      sSearch: "搜索:",
      sUrl: "",
      oPaginate: {
        sFirst: "首页",
        sPrevious: "上页",
        sNext: "下页",
        sLast: "末页"
      },
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      }
    }
  });

  // 传入字符串参数搜索DataTable
  $.fn.dataTableExt.oApi.reload = function (setting, param, reset) {
    // 记录原始的URL,每次搜索使用原始URL,避免参数不断叠加
    if (typeof setting.ajax.origUrl == 'undefined') {
      setting.ajax.origUrl = setting.ajax.url;
    }
    // TODO 这里要过滤重复的参数
    setting.ajax.url = $.appendUrl(setting.ajax.origUrl, param);
    this.fnFilter();

    if (reset == undefined || reset == true) {
      setting.ajax.url = setting.ajax.origUrl;
    }
  };

  // 传入数组/对象参数搜索DataTable
  $.fn.dataTableExt.oApi.search = function (setting, params, reset) {
    // 记录原始的URL,每次搜索使用原始URL,避免参数不断叠加
    if (typeof setting.ajax.origUrl == 'undefined') {
      setting.ajax.origUrl = setting.ajax.url;
    }

    // 支持通过serializeArray传入的数据
    if ($.isArray(params)) {
      var result = {};
      $.each(params, function () {
        result[this.name] = this.value;
      });
      params = result;
    }

    setting.ajax.url = $.updateUrl(setting.ajax.origUrl, params);
    this.fnFilter();

    if (reset == undefined || reset == true) {
      setting.ajax.url = setting.ajax.origUrl;
    }
  };

  $.fn.dataTableExt.oApi.inlineEdit = function (setting, fn) {
    $(setting.nTable).on('change', '.table-input', function () {
      var data = {};
      data['id'] = $(this).data('id');
      if ($(this).attr('type') == 'text') {
        data[$(this).attr('name')] = $(this).val();
      } else {
        data[$(this).attr('name')] = +$(this).is(':checked');
      }
      return fn(data);
    });
  };

  // 为dataTable增加点击链接删除记录功能
  $.fn.dataTableExt.oApi.deletable = function (setting, linkSelector, message) {
    var $table = this;
    linkSelector = linkSelector || '.delete-record';
    message = message || '删除后将无法还原,确认删除?';
    $table.on('click', linkSelector, function () {
      var $link = $(this);
      $.confirm(message, function () {
        $.post($link.data('href'), function (result) {
          $.msg(result);
          $table.reload();
        }, 'json');
      });
    });
  };

  // 刷新当前页面
  $.fn.dataTableExt.oApi.redraw = function (oSettings) {
    //redraw to account for filtering and sorting
    // concept here is that (for client side) there is a row got inserted at the end (for an add)
    // or when a record was modified it could be in the middle of the table
    // that is probably not supposed to be there - due to filtering / sorting
    // so we need to re process filtering and sorting
    // BUT - if it is server side - then this should be handled by the server - so skip this step
    if (oSettings.oFeatures.bServerSide === false) {
      var before = oSettings._iDisplayStart;
      oSettings.oApi._fnReDraw(oSettings);
      //iDisplayStart has been reset to zero - so lets change it back
      oSettings._iDisplayStart = before;
      oSettings.oApi._fnCalculateEnd(oSettings);
    }

    //draw the 'current' page
    oSettings.oApi._fnDraw(oSettings);
  };
});
