<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\BaseService;

class AdminPage extends BaseService
{
    /**
     * @var string
     */
    protected $title = '喵星商城';

    /**
     * @var string
     */
    protected $copyright = 'Miaoxing ©2022';

    /**
     * @var string
     */
    protected $logo = '';

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getCopyright(): string
    {
        return $this->copyright;
    }

    /**
     * @return string
     */
    public function getLogo(): string
    {
        return $this->logo;
    }
}
