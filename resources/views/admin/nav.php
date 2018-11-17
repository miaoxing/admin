<?php foreach ($categories as $category) : ?>
  <li class="nav-item <?= $category['active'] ? 'active' : '' ?>">
    <a class="nav-link" href="<?= $url($category['url']) ?>"><?= $category['name'] ?></a>
  </li>
<?php endforeach ?>
