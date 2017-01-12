define([], function () {
  var Filter = function (options) {
    options && $.extend(this, options);
    this.initialize.apply(this, arguments);
  };

  Filter.prototype.$el = $('.js-filter-form');

  Filter.prototype.initialize = function (options) {

  };

  Filter.prototype.init = function (options) {
    options && $.extend(this, options);
    this.iniEvent();
  };

  Filter.prototype.iniEvent = function () {
    this.$el.on('click', '.js-filter-item', function () {
      var $this = $(this);
      var $list = $this.closest('.js-filter-list');
      var $first = $list.find('.js-filter-item:first');
      var active = $this.hasClass('active');

      if ($list.data('multiply')) {
        // 多选
        if ($first[0] === this) {
          // 选择"不限"
          if (!active) {
            $list.find('.js-filter-item').removeClass('active');
          }
          $this.addClass('active');
        } else {
          $this.toggleClass('active');
          $first.removeClass('active');

          // 只要是全部都取消选择,选中第一个
          if ($list.find('.js-filter-item.active').length == 0) {
            $first.addClass('active');
          }
        }
      } else {
        // 单选
        $list.find('.js-filter-item').removeClass('active');
        $this.addClass('active');
      }
    });
  };

  // 获取当前过滤表单的数据
  Filter.prototype.getValues = function () {
    var values = {};
    var data = this.$el.serializeArray();
    $.each(data, function (key, input) {
      if (input.value != '') {
        values[input.name] = input.value;
      }
    });
    this.$el.find('.js-filter-list').each(function () {
      var $this = $(this);
      var $items = $this.find('.js-filter-item.active');
      var name = $this.data('name');

      if ($this.data('multiply')) {
        var selected = [];
        var names = [];
        $items.each(function () {
          selected.push($(this).data('value'));
          names.push($this.text());
        });
        values[name] = selected;
      } else {
        values[name] = $items.data('value');
      }
    });
    return values;
  };

  // 获取当前过滤表单的名称
  Filter.prototype.getLabels = function () {
    var labels = [];

    // 获取表单的名称
    var data = this.$el.serializeArray();
    $.each(data, function (key, input) {
      if (input.value == '') {
        return;
      }
      labels.push({
        label: $('#' + input.name).data('label'),
        names: [input.value]
      });
    });

    // 获取筛选控件的名称
    this.$el.find('.js-filter-list').each(function () {
      var $this = $(this);
      var $items = $this.find('.js-filter-item.active');

      // 未选择
      if ($items.data('value') === undefined) {
        return;
      }

      var names = [];
      $items.each(function () {
        names.push($(this).text());
      });
      labels.push({label: $this.data('label'), names: names});
    });

    return labels;
  };

  return new Filter();
});
