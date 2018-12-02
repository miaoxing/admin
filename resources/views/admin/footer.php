<?= $block->get('html') ?>
<script>
  var wei = <?= json_encode($js) ?>;
</script>
<?= $wei->page->renderFooter() ?>
<script>
  $.extend($, <?= json_encode($app->getConfig()) ?>);
</script>
</body>
</html>
