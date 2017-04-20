require.config({
  shim: {
    'fileinput.zh': {
      deps: ['fileinput']
    },
    'theme': {
      deps: ['fileinput.zh']
    }
  },
  paths: {
    fileinput: 'comps/bootstrap-fileinput/js/fileinput.min',
    'theme': 'comps/bootstrap-fileinput/themes/explorer/theme',
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
    overwriteInitial: true,
    maxFileCount: 1,
    maxFileSize: 2048, // 单位是kb
    initialPreviewAsData: true,
    allowedPreviewTypes: ['image'],
    allowedFileExtensions: ['gif', 'png', 'jpg', 'jpeg', 'bmp'],
    dropZoneTitle:'拖拽文件到这里',
    data:[]
  };

  $.fn.imageUploadInput = function (options) {
    options = $.extend(defaults, options);

    // 预览图片的设置
    var $container = $(this).closest('.js-upload-container');
    var inputName = $container.find('.js-image-url').attr('name');
    var initialPreview = [];
    var initialPreviewConfig = [];

    for (var i in options.data) {
      if (i === 0) {
        $container.find('.js-image-url').val(options.data[i]);
      } else {
        $container.append('<input type="hidden" name="'
        + inputName + '" class="js-image-url" value="'
        + options.data[i] + '"/>');
      }
    }

    var key = 0;
    var $imageUrlContainer = $container.find('.js-image-url');
    $imageUrlContainer.each(function () {
      $(this).data('key', key);
      if ($(this).val() !== '') {
        initialPreview.push($(this).val());
        initialPreviewConfig.push({width: '100px', url: $.url('admin/files/delete'), key: key});
        key++;
      }
    });

    options = $.extend({
      initialPreview: initialPreview,
      initialPreviewConfig: initialPreviewConfig
    }, options);

    var fileInput = $(this).fileinput(options);
    fileInput.on('fileselect', function () {
      //console.log('fileselect');

      $imageUrlContainer.each(function() {
        if($(this).data('ruleRequired') === true) {
          $(this).val('');
        } else {
          $(this).remove();
        }
      });

    }).on('filedeleted', function (outData, key, extraData) {
      //console.log('filedeleted');

      $imageUrlContainer.each(function() {
        if ($(this).data('key') === key) {
          if ($(this).data('ruleRequired') === true) {
            $(this).val('');
          } else {
            $(this).remove();
          }
        }
      });

    }).on('filepredelete', function () {
      //console.log('filepredelete');

    }).on('fileremoved', function () {
      //console.log('fileremoved');

    }).on('filecleared', function () {
      //console.log('filecleared');

      $imageUrlContainer.each(function () {
        if ($(this).data('ruleRequired') === true) {
          $(this).val('');
        } else {
          $(this).remove();
        }
      });

    }).on('filesuccessremove', function (outData, id) {
      //console.log('filesuccessremove');

      if ($imageUrlContainer.length > 0 && $imageUrlContainer.data('ruleRequired') === true) {
        $imageUrlContainer.val('');
      } else {
        $('#' + id).remove();
      }

    }).on('filepreupload', function () {
      //console.log('filepreupload');

    }).on('fileuploaded', function (outData, data, id) {
      //console.log('fileuploaded');

      if ($imageUrlContainer.length > 0 && $imageUrlContainer.data('ruleRequired') === true) {
        $imageUrlContainer.val(data.response.url);
        $imageUrlContainer.data('id', id);

      } else {
        var html = '<input type="hidden" name="'
          + inputName + '" class="js-image-url" value="'
          + data.response.url + '"'
          + 'id="' + id + '"/>';
        $container.append(html);
      }

      $.msg(data.response);
    });

    return fileInput;
  };
});
