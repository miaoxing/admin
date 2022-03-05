<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\GroupTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\HasAppIdTrait;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Miaoxing\Plugin\Model\SoftDeleteTrait;

/**
 * GroupModel
 *
 * @property GroupModel $parent
 */
class GroupModel extends BaseModel
{
    use GroupTrait;
    use HasAppIdTrait;
    use ModelTrait;
    use ReqQueryTrait;
    use SnowflakeTrait;
    use SoftDeleteTrait;

    protected $attributes = [
        'sort' => 50,
    ];

    /**
     * @var GroupModel|GroupModel[]
     */
    protected $parents;

    public function parent(): self
    {
        return $this->hasOne(static::class, 'id', 'parentId');
    }

    public function afterSave()
    {
        wei()->cache->remove('groups:' . wei()->app->getId());
    }

    public function afterDestroy()
    {
        wei()->cache->remove('groups:' . wei()->app->getId());
    }

    public function getFullName()
    {
        return implode('-', array_reverse($this->getParents()->getAll('name')));
    }

    /**
     * 获取分组的所有上级分组
     *
     * @return GroupModel|GroupModel[]
     * @throws \Exception
     */
    public function getParents()
    {
        if (!$this->parents) {
            $groups = wei()->group->getGroupsFromCache();

            $parents = wei()->groupModel()->beColl();
            $parents[] = $this;

            $group = $this;
            while ($group->parentId) {
                $group = $groups[$group->parentId];
                $parents[] = $group;
            }

            $this->parents = $parents;
        }

        return $this->parents;
    }

    /**
     * Coll: 附加未分组数据
     */
    public function withUngroup()
    {
        array_unshift($this->attributes, self::new([
            'id' => 0,
            'name' => '未分组',
        ]));
        return $this;
    }
}
