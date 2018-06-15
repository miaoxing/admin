<!DOCTYPE html>
<!-- htmllint tag-close="false" -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <title><?= $setting('admin.title', '管理系统') ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?= $asset([
    'comps/bootstrap/dist/css/bootstrap.min.css',
    'comps/jasny-bootstrap/dist/css/jasny-bootstrap.min.css',
    'comps/font-awesome-mx/css/font-awesome.min.css',
    'comps/jquery-ui-custom/jquery-ui-1.10.3.full.min.css',
    'plugins/admin/css/layout.css',
    'plugins/admin/css/utilities.css',
    'plugins/admin/css/components.css',
    'plugins/admin/css/theme.css',
    'plugins/app/css/tips.css',
  ]) ?>">
  <?= $wei->page->renderHead() ?>
</head>
<body style="height: 100%">
<!-- htmllint tag-close="$previous" -->
<div class="alert alert-warning m-b-0 text-center" style="height: 100%" role="alert">当前网页 <strong>不支持</strong> 您正在使用的浏览器。为了体验更好的访问效果， 请 <a href="http://browsehappy.com/" target="_blank">升级你的浏览器</a>.</div>
<!--<div class="browseupgrade label label-warning">当前网页 <strong>不支持</strong> 您正在使用的浏览器。为了体验更好的访问效果， 请 <a href="http://browsehappy.com/" target="_blank">升级你的浏览器</a>.</div>-->
<!--<p class="browsehappy" style="background: #ccc;color: #000;padding: 12px 36px;">-->
<!--  <a style="float:right;" href="javascript:;" onclick="this.parentNode.removeNode(true);">点击关闭提示</a>-->
<!--  您使用的浏览器 <strong>版本过低</strong>-->
<!--  ，请-->
<!--  <a href="http://browsehappy.com/" target="_blank">升级您的浏览器</a>-->
<!--  以获得更好的体验。-->
<!--</p>-->
