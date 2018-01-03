<?php

namespace Miaoxing\Admin\Controller;

use Miaoxing\Plugin\Middleware\CheckRedirectUrl;

class Admin extends \miaoxing\plugin\BaseController
{
    protected $guestPages = [
        'admin/login'
    ];

    protected $adminGuestPages = [
        'admin/index'
    ];

    public function __construct(array $options)
    {
        parent::__construct($options);

        $this->middleware(CheckRedirectUrl::class, ['only' => 'login']);
    }

    public function indexAction()
    {
        $url = wei()->adminNav->getIndexUrl();
        return $this->response->redirect($this->url($url));
    }

    public function loginAction($req)
    {
        return get_defined_vars();
    }
}
