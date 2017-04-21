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
    autoReplace: true,
    uploadUrl: $.url('admin/files/image-upload'),
    overwriteInitial: true,
    maxFileCount: 1,
    maxFileSize: 2048, // 单位是kb
    initialPreviewAsData: true,
    allowedPreviewTypes: ['image'],
    allowedFileExtensions: ['gif', 'png', 'jpg', 'jpeg', 'bmp'],
    dropZoneTitle: '拖拽文件到这里',
    fileActionSettings: {
      showDrag: false
    },
    data: []
  };

  $.fn.imageUploadInput = function (options) {
    options = $.extend(defaults, options);

    // 预览图片的设置
    var $container = $(this).closest('.js-upload-container');
    var inputName = $container.find('.js-image-url').attr('name');
    var initialPreview = [];
    var initialPreviewConfig = [];

    for (var i in options.data) {
      if (i === '0') {
        $container.find('.js-image-url').val(options.data[i]);
      } else {
        $container.append('<input type="hidden" name="'
        + inputName + '" class="js-image-url" value="'
        + options.data[i] + '"/>');
      }
    }

    var key = 0;
    $container.find('.js-image-url').each(function () {
      $(this).data('key', key);
      if ($(this).val() !== '') {
        initialPreview.push($(this).val());
        initialPreviewConfig.push({
          caption: '已上传',
          width: '100px',
          url: $.url('admin/files/delete', {url: $(this).val()}),
          key: key
        });

        key++;
      }
    });

    options = $.extend({
      initialPreview: initialPreview,
      initialPreviewConfig: initialPreviewConfig
    }, options);

    var fileInput = $(this).fileinput(options);
    var isFirst = true;
    fileInput.on('fileselect', function () {
      var len = $container.find('.js-image-url').length;
      if (!isFirst && options.maxFileCount !== 0 && len >= options.maxFileCount) {
        $.msg({
          code: -1,
          message: '超过上传数量'
        });
        $container.find('.kv-preview-thumb:last').find('.kv-file-upload').attr('disabled', 'true');
        $container.find('.kv-preview-thumb:last').find('.kv-file-remove').attr('disabled', 'true');

        return;
      }

      $container.find('.js-image-url').each(function () {
        if ($(this).data('ruleRequired') === true) {
          $(this).val('');
        } else if (isFirst || options.maxFileCount === 1) { // 首次并且最大上传数量=1时覆盖初始值
          $(this).remove();
        }
      });

      if (isFirst) {
        isFirst = false;
      }

      // 自动上传
      $container.find('.kv-preview-thumb:last').find('.kv-file-upload').click();

    }).on('filedeleted', function (event, key) {
      $container.find('.js-image-url').each(function () {
        if ($(this).data('key') === key) {
          if ($(this).data('ruleRequired') === true) {
            $(this).val('');
          } else {
            $(this).remove();
          }
        }
      });

    }).on('filecleared', function () {
      $container.find('.js-image-url').each(function () {
        if ($(this).data('ruleRequired') === true) {
          $(this).val('');
        } else {
          $(this).remove();
        }
      });

    }).on('fileremoved', function (event, id) {
      var $imageUrlContainer = $container.find('.js-image-url');
      if ($imageUrlContainer.length > 0 && $imageUrlContainer.data('ruleRequired') === true) {
        $imageUrlContainer.val('');
      } else {
        $('input#' + id).remove();
      }

    }).on('filesuccessremove', function (event, id) {
      var $imageUrlContainer = $container.find('.js-image-url');
      if ($imageUrlContainer.length > 0 && $imageUrlContainer.data('ruleRequired') === true) {
        $imageUrlContainer.val('');
      } else {
        $('input#' + id).remove();
      }

    }).on('fileuploaded', function (event, data, previewId) {
      var $imageUrlContainer = $container.find('.js-image-url');
      if ($imageUrlContainer.length > 0 && $imageUrlContainer.data('ruleRequired') === true) {
        $imageUrlContainer.val(data.response.url);
        $imageUrlContainer.data('id', previewId);

      } else {
        var html = '<input type="hidden" name="'
          + inputName + '" class="js-image-url" value="'
          + data.response.url + '"'
          + 'id="' + previewId + '"/>';
        $container.append(html);
      }

      $.msg(data.response);
    });

    return fileInput;
  };
});
