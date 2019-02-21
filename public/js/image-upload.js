require.config({
  paths: {
    'jquery-ui/ui/widget': 'plugins/admin/libs/jquery-ui/ui/minified/jquery.ui.widget.min'
  }
});

define([
  'template',
  'css!comps/blueimp-file-upload/css/jquery.fileupload',
  'comps/blueimp-file-upload/js/jquery.fileupload'
], function (template) {
  var ImageUpload = function (el, options) {
    this.$el = $(el);

    this.initOptions(options);
    this.render();
    this.initEvents();
  };

  /**
   * 默认配置
   */
  ImageUpload.prototype.defaults = {
    url: $.url('admin/files/image-upload'),
    name: null, // 表单名称,留空自动识别
    images: [], // 支持数组和对象两种数据源
    imageKey: 'image', // 如果images是对象,对应图片地址的键名
    max: 0, // 最多添加几张图片,0表示不限制
    detectMultiple: true, // 是否根据表单名称识别出是单个还是多个
    validateEvent: 'focusout',
    size: 100, // 展示的图片大小
    onChange: null
  };

  /**
   * 初始化各类配置
   *
   * @param options
   */
  ImageUpload.prototype.initOptions = function (options) {
    this.options = options = $.extend(true, {}, this.defaults, options);

    // 如果传入null,则转换为空数组
    options.images = options.images || [];

    // 留空使用输入框的名称
    options.name = options.name || this.$el.attr('name');

    // 单个输入框直接使用输入框的值
    var multiple = this.isMultiple();
    if (!multiple) {
      options.max = 1;
    }
    if (!multiple && options.images.length === 0 && this.$el.val()) {
      options.images.push(this.$el.val());
      this.$el.val('');
    }
  };

  ImageUpload.prototype.render = function () {
    var multiple = this.options.max !== 1;
    var disabled = this.$el.prop('disabled');
    var style = 'style="height: ' + this.options.size + 'px;min-width: ' + this.options.size + 'px;"';

    // 构造UI
    var layoutTpl = '<ul class="ace-thumbnails image-picker' + (disabled ? ' disabled' : '') + '">'
      + ' <li class="js-image-picker-select image-picker-select fileinput-button" ' + style + '>'
      + '   <i class="image-picker-icon fa fa-picture-o"></i>'
      + '   <input type="file" name="_file" ' + (multiple ? 'multiple' : '') + '>'
      + ' </li>';

    this.tpl = '<li class="js-image-item" ' + style + '>'
      + '  <img src="<%= src %>">'
      + '<div class="tools tools-bottom">'
      + '<a href="<%= src %>" target="_blank" title="新窗口打开">'
      + '  <i class="fa fa-search-plus"></i>'
      + '</a>';
    if (multiple) {
      this.tpl += '  <a href="javascript:;" title="左移">'
        + '    <i class="fa fa-chevron-left"></i>'
        + '  </a>'
        + '  <a href="javascript:;" title="右移">'
        + '    <i class="fa fa-chevron-right"></i>'
        + '  </a>';
    }
    this.tpl += '  <a href="javascript:;" title="删除图片">'
      + '    <i class="fa fa-times"></i>'
      + '   </a>'
      + '  </div>'
      + '  <input type="hidden" name="<%= name %>" value="<%= src %>">'
      + ' </li>'
      + '</ul>';

    this.$container = $(layoutTpl);
    this.$container.insertAfter(this.$el);

    // 保留在原来的位置,图片容器后面,不隐藏,以便表单校验
    this.$el.css({
      position: 'absolute',
      opacity: 0,
      width: this.$container.find('li').width()
    });

    this.$selectBtn = this.$container.find('.js-image-picker-select');
    this.$file = this.$container.find('input');

    // 渲染已有的图片
    var that = this;
    $.each(this.options.images, function (i, image) {
      that.addImage(image);
    });

    // 初始化上传功能
    var $loadingEl;
    var DELAY_SLOW = 1000000;
    this.$file.fileupload({
      url: this.options.url,
      dataType: 'json',
      loading: true,
      acceptFileTypes: /([./])(gif|jpe?g|png)$/i,
      maxFileSize: 999000,
      maxNumberOfFiles: this.options.max
    }).on('fileuploadstart', function () {
      $loadingEl = $.info('加载中...', DELAY_SLOW);
    }).on('fileuploadstop', function () {
      $loadingEl.hide();
    }).on('fileuploaddone', function (e, data) {
      if (data.result.code !== 1) {
        $.msg(data.result);
        return;
      }

      if (that.isReachMax()) {
        // 超过最大数量则不显示
        e.preventDefault();
      } else {
        that.addImage(data.result.url);
        that.triggerChange();
      }
    });
  };

  /**
   * 增加一张图片
   */
  ImageUpload.prototype.addImage = function (image) {
    var data = {
      src: $.type(image) === 'string' ? image : image[this.options.imageKey],
      name: $.isFunction(this.options.name) ? this.options.name() : this.options.name
    };
    var item = $(template.compile(this.tpl)(data));
    item.insertBefore(this.$selectBtn);

    this.checkImageNum();
  };

  /**
   * 批量设置图片
   */
  ImageUpload.prototype.setImages = function (images) {
    var that = this;
    this.$container.find('.js-image-item').remove();
    $.each(images, function (i, image) {
      that.addImage(image);
    });
  };

  /**
   * 判断是否为上传多个
   */
  ImageUpload.prototype.isMultiple = function () {
    switch (this.options.max) {
      case 0:
        if (this.options.detectMultiple) {
          return this.options.name && this.options.name.substr(-'[]'.length) === '[]';
        } else {
          return true;
        }

      case 1:
        return false;

      default:
        return true;
    }
  };

  /**
   * 获取已有的图片数量
   */
  ImageUpload.prototype.getNum = function () {
    return this.$container.find('li').length - 1;
  };

  /**
   * 判断是否达到最大上传数量
   */
  ImageUpload.prototype.isReachMax = function () {
    return this.options.max && this.getNum() >= this.options.max;
  };

  /**
   * 检查是否超过最大图片数量
   */
  ImageUpload.prototype.checkImageNum = function () {
    if (this.isReachMax()) {
      this.$selectBtn.hide();
    } else {
      this.$selectBtn.show();
    }

    if (this.getNum()) {
      // 如果有图片则移除原输入框的名称,设置任意值,触发验证事件,以便移除提示语
      this.$el.removeAttr('name').val('1').prop('readonly', false).trigger(this.options.validateEvent);
    } else {
      // 如果没有图片则保留原来的输入框名称,以便提交/校验逻辑正常
      this.$el.attr('name', this.options.name).val('').prop('readonly', true);
    }
  };

  /**
   * 初始化各类事件
   */
  ImageUpload.prototype.initEvents = function () {
    var that = this;

    // 点击删除按钮,移除整个图片
    this.$container.on('click', '.fa-times', function () {
      var item = $(this).parents('li:first');
      item.fadeOut(function () {
        item.remove();
        that.checkImageNum();
        that.$container.parents('form').trigger('update');
        that.triggerChange();
      });
    });

    // 左移图片
    this.$container.on('click', '.fa-chevron-left', function () {
      var item = $(this).parents('li:first');
      item.insertBefore(item.prev());
      that.triggerChange();
    });

    // 右移图片
    this.$container.on('click', '.fa-chevron-right', function () {
      var item = $(this).parents('li:first');
      item.insertAfter(item.next());
      that.triggerChange();
    });
  };

  ImageUpload.prototype.triggerChange = function () {
    this.options.onChange && this.options.onChange();
  };

  $.fn.imageUpload = function (options) {
    var imageUpload = new ImageUpload(this, options);
    this.data('image-upload', imageUpload);
    return this;
  };
});
