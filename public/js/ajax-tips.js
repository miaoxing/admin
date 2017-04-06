(function (window, $) {
  var DELAY_SLOW = 1000000;
  var DELAY_NORMAL = 2000;
  var UNAUTHORIZED = -401;

  $(document)
    .ajaxSend(function (event, jqXHR, ajaxOptions) {
      if (ajaxOptions.loading) {
        ajaxOptions.$loadingEl = $.info('加载中...', DELAY_SLOW);
      }
    })
    .ajaxComplete(function (event, jqXHR, ajaxOptions) {
      if (ajaxOptions.$loadingEl) {
        ajaxOptions.$loadingEl.hide();
      }
    })
    .ajaxSuccess(function (event, jqXHR) {
      // 未登录,跳转到登录地址
      if (typeof jqXHR.responseJSON !== 'undefined' && jqXHR.responseJSON.code === UNAUTHORIZED) {
        setTimeout(function () {
          window.location.href = jqXHR.responseJSON.redirect;
        }, DELAY_NORMAL);
      }
    })
    .ajaxError(function (event, jqXHR, ajaxOptions) {
      // http://stackoverflow.com/questions/4807572/jquery-ajax-error-handling-to-ignore-aborted
      // If either of these are true, then it's not a true error and we don't care
      if (jqXHR.status === 0 || jqXHR.readyState === 0) {
        return;
      }
      $.err('很抱歉，请求出错，请稍后再试');
      $.log({
        url: window.location.href,
        type: ajaxOptions.type,
        data: ajaxOptions.data,
        status: jqXHR.status,
        response: jqXHR.responseText
      });
    });

  /**
   * Ajax返回信息自动提示
   *
   * @todo 增加选项,如autoMsg=false
   */
  $.ajaxSetup({
    success: function (data) {
      if (typeof data === 'object') {
        $.msg(data);
      }
    }
  });
}(window, $));
