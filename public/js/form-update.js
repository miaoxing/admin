define(function () {
    // http://code.google.com/p/jquery-debounce/
    var debounce = function (fn, timeout, invokeAsap, ctx) {
        if (arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }
        var timer;
        return function () {
            var args = arguments;
            ctx = ctx || this;
            invokeAsap && !timer && fn.apply(ctx, args);
            clearTimeout(timer);
            timer = setTimeout(function () {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);
        };
    };

    // 为表单增加实时更新事件(常用于列表顶部搜索表单,和添加编辑表单)
    $.fn.update = function (fn) {
        var proxy = $.proxy(fn, this);
        this.on('change', 'select', proxy);
        this.on('keyup change', 'input', debounce(proxy, 300));
        this.on('update', proxy);
        return this;
    };
});