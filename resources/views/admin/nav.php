<?php foreach ($categories as $category) : ?>
  <li class="<?= $category['active'] ? 'active' : '' ?>">
    <a href="<?= $url($category['url']) ?>"><?= $category['name'] ?></a>
  </li>
<?php endforeach ?>
