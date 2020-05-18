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
    public static function like($columns)
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
    public static function reallyDestroy($conditions = false)
    {
    }

    /**
     * @return $this
     * @see GroupModel::withoutDeleted
     */
    public static function withoutDeleted()
    {
    }

    /**
     * @return $this
     * @see GroupModel::onlyDeleted
     */
    public static function onlyDeleted()
    {
    }

    /**
     * @return $this
     * @see GroupModel::withDeleted
     */
    public static function withDeleted()
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see GroupModel::like
     */
    public static function like($columns)
    {
    }
}
