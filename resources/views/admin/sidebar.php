<aside class="sidebar collapse d-md-block" id="sidebar">
  <?php foreach ($curSubCategories as $subCategory) : ?>
    <dl>
      <dt class="sidebar-header">
        <i class="<?= $subCategory['icon'] ?>"></i>
        <span class="sidebar-title"><?= $subCategory['name'] ?></span>
      </dt>

      <?php foreach ($subCategory['navs'] as $nav) : ?>
        <dd class="sidebar-item <?= $nav['active'] ? 'active' : '' ?>">
          <a class="sidebar-link" href="<?= $url($nav['url']) ?>">
            <?= $nav['name'] ?>
            <?php if ($nav['badge']) : ?>
              <span class="js-badge-<?= str_replace('/', '-', $nav['url']) ?> badge badge-num"></span>
            <?php endif; ?>
          </a>
        </dd>
      <?php endforeach ?>

    </dl>
  <?php endforeach ?>
</aside>
