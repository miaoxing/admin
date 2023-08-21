<?php

namespace Miaoxing\Admin\Seeder;

use Faker\Factory;
use Miaoxing\Admin\Service\AdminModel;
use Miaoxing\App\Service\GroupModel;
use Miaoxing\Plugin\Seeder\BaseSeeder;
use Miaoxing\Plugin\Service\UserModel;

class V20210414221030CreateAdmins extends BaseSeeder
{
    /**
     * {@inheritdoc}
     */
    public function run()
    {
        $faker = Factory::create('zh_CN');

        $groupIds = [];
        foreach (range(1, 10) as $i) {
            $group = GroupModel::saveAttributes([
                'name' => $faker->word,
            ]);
            $groupIds[] = $group->id;
        }

        foreach (range(1, 3) as $i) {
            $user = UserModel::saveAttributes([
                'isAdmin' => true,
                'username' => $faker->userName,
                'name' => $faker->name,
                'groupId' => $faker->randomElement($groupIds),
                'avatar' => $faker->imageUrl(480),
            ]);
            AdminModel::saveAttributes([
                'userId' => $user->id,
            ]);
        }
    }
}
