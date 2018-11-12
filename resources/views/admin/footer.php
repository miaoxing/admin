<?= $block->get('html') ?>

<script src="<?= $this->wpAsset('admin-v1.js') ?>"></script>
<script>
  $.extend($, <?= json_encode($app->getConfig()) ?>);
  var wei = <?= json_encode($js) ?>;
</script>
<?= $wei->page->renderFooter() ?>
</body>
</html>
