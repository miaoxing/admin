require.config({
  paths: {
    'jquery-ui/ui/widget': 'comps/jquery-ui/ui/jquery.ui.widget'
  }
});

define([
  'template',
  'css!comps/blueimp-file-upload/css/jquery.fileupload',
  'comps/blueimp-file-upload/js/jquery.fileupload'
], function (template) {
  let ImageUpload = function (el, options) {
    this.$el = $(el);

    this.initOptions(options);
    this.render();
    this.initEvents();
  };

  /**
   * 默认配置
   */
  ImageUpload.prototype.defaults = {
    name: null, // 表单名称,留空自动识别
    images: [], // 支持数组和对象两种数据源
    imageKey: 'image', // 如果images是对象,对应图片地址的键名
    max: 0, // 最多添加几张图片,0表示不限制
    detectMultiple: true // 是否根据表单名称识别出是单个还是多个
  };

  /**
   * 初始化各类配置
   *
   * @param options
   */
  ImageUpload.prototype.initOptions = function (options) {
    this.options = options = $.extend({}, this.defaults, options);

    // 如果传入null,则转换为空数组
    options.images = options.images || [];

    // 留空使用输入框的名称
    if (!options.name) {
      options.name = this.$el.attr('name');
      this.$el.removeAttr('name');
    }

    // 单个输入框直接使用输入框的值
    const multiple = this.isMultiple();
    if (!multiple) {
      options.max = 1;
    }
    if (!multiple && options.images.length === 0 && this.$el.val()) {
      options.images.push(this.$el.val());
    }
  };

  ImageUpload.prototype.render = function () {
    const multiple = this.options.max !== 1;

    this.$el.hide();

    // 构造UI
    const layoutTpl = '<ul class="js-file-container ace-thumbnails image-picker fileinput-button">' +
      ' <li class="js-select-image select-image text-center">' +
      '   <h5>选择图片</h5>' +
      '   <i class="fa fa-picture-o"></i>' +
      '   <input type="file" name="_file" ' + (multiple ? 'multiple' : '') + '>' +
      '  </li>' +
      '</ul>';

    this.tpl = '<li>'
      + '<a href="<%= src %>" target="_blank">'
      + '  <img src="<%= src %>">'
      + '</a>'
      + '<div class="tools tools-bottom">';
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
      + '  </a>'
      + '</div>'
      + '<input type="hidden" name="<%= name %>" value="<%= src %>">'
      + '</li>';

    this.$container = $(layoutTpl);
    this.$container.insertAfter(this.$el);

    this.$selectBtn = this.$container.find('.js-select-image');
    this.$file = this.$container.find('input');

    // 渲染已有的图片
    const that = this;
    $.each(this.options.images, function (i, image) {
      that.addImage(image);
    });

    // 初始化上传功能
    this.$file.fileupload({
      url: $.url('admin/files/image-upload'),
      dataType: 'json',
      acceptFileTypes: /([./])(gif|jpe?g|png)$/i,
      maxFileSize: 999000,
      maxNumberOfFiles: this.options.max
    }).on('fileuploaddone', function (e, data) {
      if (that.isReachMax()) {
        // 超过最大数量则不显示
        e.preventDefault();
      } else {
        that.addImage(data.result.url);
      }
    });
  };

  /**
   * 增加一张图片
   */
  ImageUpload.prototype.addImage = function (image) {
    const data = {
      src: $.type(image) === 'string' ? image : image[this.options.imageKey],
      name: $.isFunction(this.options.name) ? this.options.name() : this.options.name
    };
    const item = $(template.compile(this.tpl)(data));
    item.insertBefore(this.$selectBtn);

    this.checkImageNum();
  };

  /**
   * 判断是否为上传多个
   */
  ImageUpload.prototype.isMultiple = function () {
    switch (this.options.max) {
      case 0:
        if (this.options.detectMultiple) {
          return this.options.name.substr(-'[]'.length) === '[]';
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
   * 判断是否达到最大上传数量
   */
  ImageUpload.prototype.isReachMax = function () {
    return this.options.max && this.$container.find('li').length - 1 >= this.options.max;
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
  };

  /**
   * 初始化各类事件
   */
  ImageUpload.prototype.initEvents = function () {
    const that = this;

    // 点击删除按钮,移除整个图片
    this.$container.on('click', '.fa-times', function () {
      const item = $(this).parents('li:first');
      item.fadeOut(function () {
        item.remove();
        that.checkImageNum();
        that.$container.parents('form').trigger('update');
      });
    });

    // 左移图片
    this.$container.on('click', '.fa-chevron-left', function () {
      const item = $(this).parents('li:first');
      item.insertBefore(item.prev());
    });

    // 右移图片
    this.$container.on('click', '.fa-chevron-right', function () {
      const item = $(this).parents('li:first');
      item.insertAfter(item.next());
    });
  };

  $.fn.imageUpload = function (options) {
    const imageUpload = new ImageUpload(this, options);
    this.data('image-upload', imageUpload);
    return this;
  };
});
