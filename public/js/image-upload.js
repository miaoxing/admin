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
  const defaults = {
    name: null, // 表单名称,留空自动识别
    images: [], // 支持数组和对象两种数据源
    imageKey: 'image', // 如果images是对象,对应图片地址的键名
    max: 0 // 最多添加几张图片,0表示不限制
  };

  $.fn.imageUpload = function (options) {
    // 初始化配置
    const $el = $(this);
    $el.hide();

    options = $.extend({}, defaults, options);
    options.images = options.images || [];

    // 单个输入框直接使用输入框的值
    const multiple = options.max !== 1;
    if (!multiple && options.images.length === 0 && $el.val()) {
      options.images.push($el.val());
    }

    // 自动识别表单的名称
    if (!options.name) {
      options.name = $el.attr('name');
      $el.removeAttr('name');
    }

    // 构造UI
    const layoutTpl = '<ul class="js-file-container ace-thumbnails image-picker fileinput-button">' +
      ' <li class="js-select-image select-image text-center">' +
      '   <h5>选择图片</h5>' +
      '   <i class="fa fa-picture-o"></i>' +
      '   <input type="file" name="_file" ' + (multiple ? 'multiple' : '') + '>' +
      '  </li>' +
      '</ul>';

    let tpl = '<li>'
      + '<a href="<%= src %>" target="_blank">'
      + '  <img src="<%= src %>">'
      + '</a>'
      + '<div class="tools tools-bottom">';
    if (multiple) {
      tpl += '  <a href="javascript:;" title="左移">'
        + '    <i class="fa fa-chevron-left"></i>'
        + '  </a>'
        + '  <a href="javascript:;" title="右移">'
        + '    <i class="fa fa-chevron-right"></i>'
        + '  </a>';
    }
    tpl += '  <a href="javascript:;" title="删除图片">'
      + '    <i class="fa fa-times"></i>'
      + '  </a>'
      + '</div>'
      + '<input type="hidden" name="<%= name %>" value="<%= src %>">'
      + '</li>';

    const $container = $(layoutTpl);
    $container.insertAfter(this);

    const $selectBtn = $container.find('.js-select-image');
    const $file = $container.find('input');

    const addImage = function (image) {
      const data = {
        src: $.type(image) === 'string' ? image : image[options.imageKey],
        name: $.isFunction(options.name) ? options.name() : options.name
      };
      const item = $(template.compile(tpl)(data));
      item.insertBefore($selectBtn);

      checkImageNum();
    };

    function isReachMax() {
      return options.max && $container.find('li').length - 1 >= options.max;
    }

    /**
     * 检查是否超过最大图片数量
     */
    const checkImageNum = function () {
      if (isReachMax()) {
        $selectBtn.hide();
      } else {
        $selectBtn.show();
      }
    };

    // 渲染已有的图片
    $.each(options.images, function (i, image) {
      addImage(image);
    });

    // 初始化事件
    // 点击删除按钮,移除整个图片
    $container.on('click', '.fa-times', function () {
      const item = $(this).parents('li:first');
      item.fadeOut(function () {
        item.remove();
        checkImageNum();
        $container.parents('form').trigger('update');
      });
    });

    // 左移图片
    $container.on('click', '.fa-chevron-left', function () {
      const item = $(this).parents('li:first');
      item.insertBefore(item.prev());
    });

    // 右移图片
    $container.on('click', '.fa-chevron-right', function () {
      const item = $(this).parents('li:first');
      item.insertAfter(item.next());
    });

    // 初始化上传功能
    $file.fileupload({
      url: $.url('admin/files/image-upload'),
      dataType: 'json',
      acceptFileTypes: /([./])(gif|jpe?g|png)$/i,
      maxFileSize: 999000,
      maxNumberOfFiles: options.max
    }).on('fileuploaddone', function (e, data) {
      if (isReachMax()) {
        // 超过最大数量则不显示
        e.preventDefault();
      } else {
        addImage(data.result.url);
      }
    });

    return this;
  };
});
