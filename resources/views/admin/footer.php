<?php $event->trigger('beforeScript') ?>
<script src="<?= $mainJs = $asset([
  // 通用类库
  'comps/requirejs/require.min.js',
  'comps/jquery-legacy/jquery.min.js',
  'comps/jquery-migrate/jquery-migrate-1.2.1.js',
  'comps/bootstrap/dist/js/bootstrap.min.js',
  'comps/jasny-bootstrap/dist/js/jasny-bootstrap.min.js',
  'plugins/admin/js/admin.js',
  'assets/tips.js',
  // 核心类库
  'assets/app.js',
  // 配置和初始模块
  'assets/require.js',
  'assets/requireModules.js',
  'assets/popup.js',
  'assets/ajaxTips.js',
  'assets/apps/admin/popup.js',
]) ?>"></script>
<script>window.requirejs || document.write('<script src="<?= $asset->fallback($mainJs) ?>"><\/script>')</script>
<script>
  $.extend($, <?= json_encode($app->getConfig()) ?>);
  $.tips.defaults.valign = 'top';
</script>
<?php $event->trigger('inlineScript') ?>
<?= $block->get('html') ?>
<?php $event->trigger('beforePageScript') ?>
<?= $block->get('js') ?>
<?php $event->trigger('afterScript') ?>
</body>
</html>
