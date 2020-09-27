<?php

return [
    '/admin' => [
        'name' => '首页',

        '/admins' => [
            'name' => '管理员管理',
            'apis' => [
                [
                    'method' => 'GET',
                    'page' => 'admin-api/admins',
                ],
            ],

            '/new' => [
                'name' => '添加',
                'apis' => [
                    [
                        'method' => 'GET',
                        'page' => 'admin-api/admins/defaults',
                    ],
                    [
                        'method' => 'POST',
                        'page' => 'admin-api/admins/defaults',
                    ],
                    [
                        'method' => 'GET',
                        'page' => 'admin-api/admins/defaults',
                    ],
                ],
            ],

            '/[id]' => [
                '/edit' => [
                    'name' => '编辑',
                    'apis' => [
                        [
                            'method' => 'GET',
                            'page' => 'admin-api/admins/[id]',
                        ],
                        [
                            'method' => 'PATCH',
                            'page' => 'admin-api/admins/[id]',
                        ],
                        [
                            'method' => 'GET',
                            'page' => 'admin-api/groups',
                        ],
                    ],
                ],
            ],
        ],

        '/groups' => [
            'name' => '分组管理',
            '/new' => [
                'name' => '添加',
            ],
            '/[id]' => [
                '/edit' => [
                    'name' => '编辑',
                ],
            ],
        ],

        '/password' => [
            'name' => '修改密码',
        ],
    ],
];
