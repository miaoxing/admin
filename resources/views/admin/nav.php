<style>
  .nav-link {
    position: relative;
  }
  .nav-link > .badge {
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 10px;
    padding: 3px 7px;
    background: #f5222d;
    color: #fff;
  }
</style>
<?php foreach ($categories as $category) : ?>
  <li class="nav-item <?= $category['active'] ? 'active' : '' ?>">
    <a class="nav-link" href="<?= $url($category['url']) ?>">
      <?= $category['name'] ?>
      <span class="badge">1</span>
    </a>
  </li>
<?php endforeach ?>
