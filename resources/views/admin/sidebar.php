<aside class="sidebar" id="sidebar">
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
              <?php // deprecated ?>
              <?php $count = $event->trigger('adminShowSideBarBadge', $nav['badge']); ?>
              <?php if ($count[0] > 0) : ?>
                <span class="badge"><?= $count[0] ?></span>
              <?php endif; ?>
            <?php endif; ?>
            <?php if ($nav['badge']) : ?>
              <?php $count = $event->until('adminShowSideBar' . ucfirst($nav['badge']) .'Badge'); ?>
              <?php if ($count > 0) : ?>
                <span class="badge"><?= $count ?></span>
              <?php endif; ?>
            <?php endif; ?>
          </a>
        </dd>
      <?php endforeach ?>

    </dl>
  <?php endforeach ?>
</aside>
