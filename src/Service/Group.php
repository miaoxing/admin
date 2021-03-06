<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\ConfigTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;

/**
 * 用户分组
 *
 * @property string defaultName
 */
class Group extends \Miaoxing\Plugin\BaseService
{
    use ConfigTrait;
    use ReqQueryTrait;

    /**
     * 是否是客服小组
     */
    public const CUSTOMER_SERVICE = 1;

    protected $table = 'groups';

    protected $data = [
        'sort' => 50,
    ];

    protected $customerServiceGroups;

    protected $groupCaches = [];

    protected $defaultName = '未分组';

    public function isReserved()
    {
        return in_array($this['id'], [0, 1, 2], true);
    }

    public function unshift(self $group)
    {
        array_unshift($this->data, $group);
        return $this;
    }

    public function getCustomerServiceGroups()
    {
        $this->customerServiceGroups
        || $this->customerServiceGroups = wei()->group()->findAll(['isCustomerService' => self::CUSTOMER_SERVICE]);

        return $this->customerServiceGroups;
    }

    /**
     * Collection
     *
     * @param array $groups
     * @param int $deep
     * @return array
     */
    public function getTree($groups = [], $deep = 0)
    {
        $deep = (int) $deep;
        --$deep;

        /** @var $group Group */
        foreach ($this as $group) {
            $groups[] = $group;
            // 参数为0时,当前为-1,则一直获取下去
            if ($deep) {
                $groups = $group->getChildren()->findAll()->getTree($groups, $deep);
            }
        }

        return $groups;
    }

    public function getTreeToArray($groups = [])
    {
        /** @var $group Group */
        foreach ($this as $group) {
            $groups[] = $group->toArray();
            $groups = $group->getChildren()->desc('sort')->findAll()->getTreeToArray($groups);
        }

        return $groups;
    }

    /**
     * Record: 获取当前分组的子分组
     *
     * @return Group|Group[]
     */
    public function getChildren()
    {
        return wei()->group()->notDeleted()->andWhere(['parentId' => $this['id']])->desc('sort')->desc('id');
    }

    public function getNameWithPrefix()
    {
        if ('0' == $this['level']) {
            $prefix = '';
        } else {
            $prefix = '|' . str_repeat('--', $this['level']);
        }

        return $prefix . $this['name'];
    }

    /**
     * @return GroupModel|GroupModel[]
     * @throws \Exception
     */
    public function getGroupsFromCache()
    {
        if (!$this->groupCaches) {
            $this->groupCaches = wei()->groupModel()
                ->desc('sort')
                ->setCacheTime(86400)
                ->setCacheKey('groups:' . wei()->app->getId())
                ->indexBy('id')
                ->findAll();
        }
        return $this->groupCaches;
    }
}
