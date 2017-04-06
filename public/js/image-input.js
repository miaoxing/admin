require.config({
  shim: {
    'fileinput.zh': {
      deps: ['fileinput']
    }
  },
  paths: {
    fileinput: 'comps/bootstrap-fileinput/js/fileinput.min',
    'fileinput.zh': 'comps/bootstrap-fileinput/js/fileinput_locale_zh'
  }
});

define([
  'css!comps/bootstrap-fileinput/css/fileinput.min',
  'fileinput',
  'fileinput.zh'
], function () {
  var defaults = {
    language: 'zh',
    showUpload: false,
    uploadUrl: $.url('admin/files/image-upload'),
    uploadAsync: true,
    dropZoneEnabled: false,
    maxFileCount: 1,
    maxFileSize: 2048, // 单位是KB
    resizeImage: false,
    showCaption: false,
    previewSettings: {
      image: {
        width: '320px',
        height: 'auto'
      }
    },
    allowedPreviewTypes: ['image'],
    allowedFileExtensions: ['gif', 'png', 'jpg', 'jpeg', 'bmp'],
    previewFileIcon: ''
  };

  $.fn.imageUploadInput = function (options) {
    options = $.extend(defaults, options);

    var imageUrl = $(this).closest('.js-upload-container').find('.js-image-url');
    var imageUrlStr = imageUrl.val();

    if (imageUrlStr) {
      options = $.extend({
        initialPreview: [
          '<img src="' + imageUrlStr + '" class="file-preview-image">'
        ]
      }, options); // 预览图片的设置
    }

    var fileInput = $(this).fileinput(options);
    fileInput.on('filebatchselected', function () {
      if (!options.showUpload) {
        $(this).fileinput('upload');
      }

    }).on('fileclear', function () {
      imageUrl.val('');

    }).on('fileuploaded', function (event, data) {
      if (data.response) {
        imageUrl.val(data.response.url);
      }

      $.msg(data.response);
    });

    return fileInput;
  };
});
