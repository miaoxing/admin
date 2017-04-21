require.config({
  shim: {
    'fileinput.zh': {
      deps: ['fileinput']
    },
    theme: {
      deps: ['fileinput.zh']
    }
  },
  paths: {
    fileinput: 'comps/bootstrap-fileinput/js/fileinput.min',
    theme: 'comps/bootstrap-fileinput/themes/explorer/theme',
    'fileinput.zh': 'comps/bootstrap-fileinput/js/locales/zh'
  }
});

define([
  'css!comps/bootstrap-fileinput/css/fileinput.min',
  'css!comps/bootstrap-fileinput/themes/explorer/theme',
  'comps/bootstrap-fileinput/js/plugins/canvas-to-blob.min',
  'comps/bootstrap-fileinput/js/plugins/sortable.min',
  'comps/bootstrap-fileinput/js/plugins/purify.min',
  'fileinput',
  'fileinput.zh',
  'theme'
], function () {
  var defaults = {
    language: 'zh',
    theme: 'explorer',
    showUpload: false,
    uploadUrl: $.url('admin/files/image-upload'),
    autoReplace: false,
    maxFileCount: 1,
    maxFileSize: 2048, // 单位是kb
    allowedPreviewTypes: ['image'],
    allowedFileExtensions: ['gif', 'png', 'jpg', 'jpeg', 'bmp'],
    dropZoneTitle: '拖拽文件到这里',
    fileActionSettings: {
      showDrag: false
    },
    // 选择新文件时,保留已有的文件
    overwriteInitial: false,
    // 计算文件数量时,把初始的也算进去
    validateInitialCount: true,
    // 预览
    initialPreviewAsData: true,
    showRemove: false,
    showClose: false
  };

  $.fn.imageUploadInput = function (options) {
    options = $.extend({}, defaults, options);

    var $input = $(this);
    var $container = $(this).closest('.js-upload-container');
    var $urlInput = $container.find('.js-image-url');
    options.name = $urlInput.attr('name');

    if (options.maxFileCount === 1) {
      var value = $urlInput.val();
      if (value) {
        options.data = [value];
      } else {
        options.data = [];
      }
    }

    // 将data转换为initialPreview和initialPreviewConfig
    var initialPreviewConfig = [];
    $.each(options.data, function (i, row) {
      initialPreviewConfig.push({
        caption: '已上传',
        width: '100px',
        key: row,
        url: $.url('admin/files/delete', {url: row})
      });
      addImage(row);
    });
    options.initialPreview = options.data;
    options.initialPreviewConfig = initialPreviewConfig;

    function addImage(url, previewId) {
      if (options.maxFileCount === 1) {
        $urlInput.val(url);
      } else {
        previewId || (previewId = '');
        $container.append('<input type="hidden" name="'
          + options.name + '" class="js-image-url ' + previewId + '" value="'
          + url + '"/>');
        removePlaceHolder();
      }
    }

    function removeImage(key) {
      if (options.maxFileCount === 1) {
        $urlInput.val('');
        return;
      }

      // 传入的是预览的ID
      var prefix = 'preview-';
      if (key.substr(0, prefix.length) === prefix) {
        $('.js-image-url.' + key).remove();
        addPlaceHolder();
        return;
      }

      // 传入的是图片的URL地址
      $('.js-image-url').each(function () {
        if ($(this).val() === key) {
          $(this).remove();
          addPlaceHolder();
        }
      });
    }

    function removeAllImage() {
      if (options.maxFileCount === 1) {
        removeImage('');
      } else {
        $container.find('.js-image-url').remove();
        addPlaceHolder();
      }
    }

    function addPlaceHolder() {
      if ($container.find('.js-image-url').length === 0) {
        addImage('');
      }
    }

    function removePlaceHolder() {
      $container.find('.js-image-url').filter(function() {
        return !this.value;
      }).remove();
    }

    // 拦截更改事件,自定控制最大数量
    $input.on('change', function (e) {
      if (!e.originalEvent) {
        return;
      }
      if (!options.maxFileCount) {
        return;
      }

      // NOTICE 上传一个图片后getFilesCount就返回错误的结果,所以需要通过UI获取真实的数量
      // var filesCount = $input.fileinput('getFilesCount');
      var filesCount = $input.closest('.file-input').find('.file-preview-frame:visible').length;
      if (filesCount >= options.maxFileCount) {
        $.err('最多可上传' + options.maxFileCount + '个图片,请先移除已有的图片');
        e.stopImmediatePropagation();
      }
    });

    $input.fileinput(options);

    // 选择文件后自动上传
    $input.on('fileselect', function() {
      $input.closest('.file-input').find('.kv-preview-thumb:last').find('.kv-file-upload').click();
    });

    // 上传后更新表单
    $input.on('fileuploaded', function (event, data, previewId) {
      addImage(data.response.url, previewId);
    });

    // 向后台发送删除,更新表单
    $input.on('filedeleted', function (event, key) {
      removeImage(key);
    });

    // 前台移除一个记录,更新表单
    $input.on('filesuccessremove', function (event, id) {
      removeImage(id);
    });

    // 前台移除全部记录,更新表单
    $input.on('filecleared', function () {
      removeAllImage();
    });
  };
});
