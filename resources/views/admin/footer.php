<?= $block->get('html') ?>

<script src="<?= $asset('comps/requirejs/require.min.js') ?>"></script>
<script src="<?= $asset('comps/jquery-legacy/jquery.min.js') ?>"></script>
<script src="<?= $this->wpAsset('admin-v1-manifest.js') ?>"></script>
<script src="<?= $this->wpAsset('admin-v1.js') ?>"></script>
<script>
  $.extend($, <?= json_encode($app->getConfig()) ?>);
  $.tips.defaults.valign = 'top';
  var wei = <?= json_encode($js) ?>;
</script>
<?= $wei->page->renderFooter() ?>
</body>
</html>
