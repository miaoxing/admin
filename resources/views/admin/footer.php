<?php $event->trigger('beforeScript') ?>
<script src="<?= $mainJs = $asset([
  // 通用类库
  'comps/requirejs/require.min.js',
  'comps/jquery-legacy/jquery.min.js',
  'comps/jquery-migrate/jquery-migrate-1.2.1.js',
  'comps/bootstrap/dist/js/bootstrap.min.js',
  'comps/jasny-bootstrap/dist/js/jasny-bootstrap.min.js',
  // 核心类
  'plugins/app/js/app.js',
  // 配置和初始模块
  'plugins/app/js/tips.js',
  'plugins/app/js/require-config.js',
  'plugins/admin/js/require-config.js',
  'plugins/admin/js/ajax-tips.js',
  'plugins/admin/js/popup.js',
  'plugins/admin/js/admin.js',
]) ?>"></script>
<script>window.requirejs || document.write('<script src="<?= $asset->fallback($mainJs) ?>"><\/script>')</script>
<script src="<?= $wei->wpAsset('manifest.js') ?>"></script>
<script src="<?= $wei->wpAsset('react.js') ?>"></script>
<script>
  $.extend($, <?= json_encode($app->getConfig()) ?>);
  $.tips.defaults.valign = 'top';
  var wei = <?= json_encode($js) ?>;
</script>
<?php $event->trigger('inlineScript') ?>
<?= $block->get('html') ?>
<?php $event->trigger('beforePageScript') ?>
<?= $block->get('js') ?>
<?php $event->trigger('afterScript') ?>
</body>
</html>
