<?php

namespace Miaoxing\Admin\Controller\AdminApi;

use Carbon\Carbon;
use Miaoxing\Plugin\BaseController;

class IndexController extends BaseController
{
    protected $controllerName = '首页';

    protected $actionPermissions = [
        'index' => '首页',
    ];

    public function indexAction()
    {
        return $this->suc([
            'charts' => [
                [
                    'date' => '2020-01-01',
                    'name' => '订单数',
                    'value' => 12,
                ],
                [
                    'date' => '2020-01-02',
                    'name' => '订单数',
                    'value' => 13,
                ],
                [
                    'date' => '2020-01-03',
                    'name' => '订单数',
                    'value' => 16,
                ],
                [
                    'date' => '2020-01-04',
                    'name' => '订单数',
                    'value' => 18,
                ],
                [
                    'date' => '2020-01-05',
                    'name' => '订单数',
                    'value' => 22,
                ],
                [
                    'date' => '2020-01-06',
                    'name' => '订单数',
                    'value' => 26,
                ],
                [
                    'date' => '2020-01-07',
                    'name' => '订单数',
                    'value' => 32,
                ],
                [
                    'date' => '2020-01-01',
                    'name' => '订单金额',
                    'value' => 12.34,
                ],
                [
                    'date' => '2020-01-02',
                    'name' => '订单金额',
                    'value' => 14.34,
                ],
                [
                    'date' => '2020-01-03',
                    'name' => '订单金额',
                    'value' => 18.34,
                ],
                [
                    'date' => '2020-01-04',
                    'name' => '订单金额',
                    'value' => 22.34,
                ],
                [
                    'date' => '2020-01-05',
                    'name' => '订单金额',
                    'value' => 28.34,
                ],
                [
                    'date' => '2020-01-06',
                    'name' => '订单金额',
                    'value' => 32.34,
                ],
                [
                    'date' => '2020-01-07',
                    'name' => '订单金额',
                    'value' => 38.34,
                ],

            ],
            'stats' => [
                [
                    'title' => '待发货订单',
                    'value' => '328',
                    'color' => '#0c86de',
                    'icon' => 'fa fa-shopping-cart',
                ],
                [
                    'title' => '待退款订单',
                    'value' => '1231',
                    'color' => '#5cb85c',
                    'icon' => 'fa fa-money-bill-alt',
                ],
                [
                    'title' => '今日新增用户数',
                    'value' => '123',
                    'color' => '#f28c48',
                    'icon' => 'fa fa-user-plus',
                ],
                [
                    'title' => '总用户数',
                    'value' => '2321',
                    'color' => '#fa5b50',
                    'icon' => 'fa fa-users',
                ]
            ]
        ]);
    }
}
