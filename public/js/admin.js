/* eslint-disable */
/* 忽略外部文件 */
$(function () {
  var scrollTop = function () {
    return document.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
  };
  var winHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };

  var b = $('.btn-scroll-up');
  if (b.length > 0) {
    var c = !1;
    $(window).on('scroll', function () {
      var a = scrollTop(), d = winHeight(), e = document.body.scrollHeight;

      a > parseInt(d / 4, 10) || a > 0 && e >= d && d + a >= e - 1 ? c || (b.addClass('display'), c = !0) : c && (b.removeClass('display'), c = !1);
    }).triggerHandler('scroll');

    b.on('click', function () {
      var b = Math.min(500, Math.max(100, parseInt(scrollTop() / 3, 10)));
      return $('html,body').animate({scrollTop: 0}, b), !1;
    });
  }
});
