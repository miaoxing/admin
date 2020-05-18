<?php

namespace Miaoxing\Admin\Service;

class AdminLog extends \Miaoxing\Plugin\BaseModel
{
}

class AdminNav extends \Miaoxing\Plugin\BaseService
{
}

class Group extends \Miaoxing\Plugin\BaseModel
{
    /**
     * @param array|string $columns
     * @return $this
     * @see Group::like
     */
    public function like($columns)
    {
    }
}

class GroupModel extends \Miaoxing\Plugin\Service\Model
{
    /**
     * @param mixed $conditions
     * @return $this
     * @see GroupModel::reallyDestroy
     */
    public function reallyDestroy($conditions = false)
    {
    }

    /**
     * @return $this
     * @see GroupModel::withoutDeleted
     */
    public function withoutDeleted()
    {
    }

    /**
     * @return $this
     * @see GroupModel::onlyDeleted
     */
    public function onlyDeleted()
    {
    }

    /**
     * @return $this
     * @see GroupModel::withDeleted
     */
    public function withDeleted()
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see GroupModel::like
     */
    public function like($columns)
    {
    }
}
