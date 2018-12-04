<?php foreach ($categories as $category) : ?>
  <li class="nav-item <?= $category['active'] ? 'active' : '' ?>">
    <a class="nav-link" href="<?= $url($category['url']) ?>">
      <?= $category['name'] ?>
      <?php if ($category['badge']) { ?>
        <span class="js-badge-<?= str_replace('/', '-', $category['url']) ?> badge badge-num"></span>
      <?php } ?>
    </a>
  </li>
<?php endforeach ?>
