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
    protected $copyright = 'Miaoxing ©2024';

    /**
     * @var string
     */
    protected $logo = 'https://u.miaoxingyun.com/logo.svg';

    /**
     * 入口页（如登录、注册页）背景图
     *
     * @var string
     */
    protected $entryBg = '';

    /**
     * 背景图片，可用于登录等简单页面
     *
     * @var string
     * @experimental 只有特定页面有背景，可能要改为其他更合适的名称
     */
    protected $bg = '';

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

    /**
     * @return string
     */
    public function getEntryBg(): string
    {
        return $this->entryBg;
    }

    /**
     * @return string
     * @experimental
     */
    public function getBg(): string
    {
        return $this->bg;
    }
}
