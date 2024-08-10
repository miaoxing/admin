<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Services\Page\CollGetTrait;
use Miaoxing\Services\Page\PostToPatchTrait;

return new class extends BasePage {
    use CollGetTrait;
    use PostToPatchTrait;

    protected $className = '管理员';

    protected $include = [
        'user.group.parent',
    ];
};
