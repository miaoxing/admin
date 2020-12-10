<?php

namespace Miaoxing\Admin\Service;

class AdminLog
{
    /**
     * Returns the record data as array
     *
     * @param array|callable $returnFields A indexed array specified the fields to return
     * @param callable|null $prepend
     * @return array
     * @see AdminLog::toArray
     */
    public static function toArray($returnFields = [], callable $prepend = null)
    {
    }

    /**
     * 不经过fillable检查,设置数据并保存
     *
     * @param array $data
     * @return $this
     * @see AdminLog::saveData
     */
    public static function saveData($data = [])
    {
    }

    /**
     * Returns the success result with model data
     *
     * @param array $merge
     * @return Ret
     * @see AdminLog::toRet
     */
    public static function toRet(array $merge = [])
    {
    }

    /**
     * Return the record table name
     *
     * @return string
     * @see AdminLog::getTable
     */
    public static function getTable()
    {
    }

    /**
     * Import a PHP array in this record
     *
     * @param array|\ArrayAccess $data
     * @return $this
     * @see AdminLog::fromArray
     */
    public static function fromArray($data)
    {
    }

    /**
     * Save the record or data to database
     *
     * @param array $data
     * @return $this
     * @see AdminLog::save
     */
    public static function save($data = [])
    {
    }

    /**
     * Delete the current record and trigger the beforeDestroy and afterDestroy callback
     *
     * @param int|string $id
     * @return $this
     * @see AdminLog::destroy
     */
    public static function destroy($id = null)
    {
    }

    /**
     * Set the record field value
     *
     * @param string $name
     * @param mixed $value
     * @param bool $throwException
     * @return $this|false
     * @see AdminLog::set
     */
    public static function set($name, $value = null, $throwException = true)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or false
     *
     * @param int|string|array|null $id
     * @return $this|null
     * @see AdminLog::find
     */
    public static function find($id)
    {
    }

    /**
     * Find a record by primary key, or throws 404 exception if record not found
     *
     * @param int|string $id
     * @return $this
     * @throws \Exception
     * @see AdminLog::findOrFail
     */
    public static function findOrFail($id)
    {
    }

    /**
     * Find a record by primary key, or init with the specified data if record not found
     *
     * @param int|string $id
     * @param array|object $data
     * @return $this
     * @see AdminLog::findOrInit
     */
    public static function findOrInit($id = null, $data = [])
    {
    }

    /**
     * Find a record by primary key, or save with the specified data if record not found
     *
     * @param int|string $id
     * @param array $data
     * @return $this
     * @see AdminLog::findOrCreate
     */
    public static function findOrCreate($id, $data = [])
    {
    }

    /**
     * @param array $attributes
     * @param array $data
     * @return $this
     * @see AdminLog::findByOrCreate
     */
    public static function findByOrCreate($attributes, $data = [])
    {
    }

    /**
     * Executes the generated SQL and returns the found record collection object or false
     *
     * @param array $ids
     * @return $this|$this[]
     * @see AdminLog::findAll
     */
    public static function findAll($ids)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|null
     * @see AdminLog::findBy
     */
    public static function findBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|$this[]
     * @see AdminLog::findAllBy
     */
    public static function findAllBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array $attributes
     * @param array|object $data
     * @return $this
     * @see AdminLog::findOrInitBy
     */
    public static function findOrInitBy($attributes, $data = [])
    {
    }

    /**
     * Find a record by primary key value and throws 404 exception if record not found
     *
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @throws \Exception
     * @see AdminLog::findByOrFail
     */
    public static function findByOrFail($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array|Req|null $req
     * @return $this
     * @throws \Exception
     * @see AdminLog::findFromReq
     */
    public static function findFromReq($req = null)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or null if not found
     *
     * @return $this|null
     * @see AdminLog::first
     */
    public static function first()
    {
    }

    /**
     * @return $this|$this[]|array
     * @see AdminLog::all
     */
    public static function all()
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::indexBy
     */
    public static function indexBy($column)
    {
    }

    /**
     * Returns the name of fields of current table
     *
     * @return array
     * @see AdminLog::getColumns
     */
    public static function getColumns()
    {
    }

    /**
     * Executes the generated query and returns the first array result
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array|null
     * @see AdminLog::fetch
     */
    public static function fetch($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Executes the generated query and returns all array results
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array
     * @see AdminLog::fetchAll
     */
    public static function fetchAll($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string|null $index
     * @return array
     * @see AdminLog::pluck
     */
    public static function pluck(string $column, string $index = null)
    {
    }

    /**
     * @param int $count
     * @param callable $callback
     * @return bool
     * @see AdminLog::chunk
     */
    public static function chunk(int $count, callable $callback)
    {
    }

    /**
     * Executes a COUNT query to receive the rows number
     *
     * @param string $column
     * @return int
     * @see AdminLog::cnt
     */
    public static function cnt($column = '*')
    {
    }

    /**
     * Execute a update query with specified data
     *
     * @param array|string $set
     * @param mixed $value
     * @return int
     * @see AdminLog::update
     */
    public static function update($set = [], $value = null)
    {
    }

    /**
     * Execute a delete query with specified conditions
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return mixed
     * @see AdminLog::delete
     */
    public static function delete($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Sets the position of the first result to retrieve (the "offset")
     *
     * @param int|float|string $offset The first result to return
     * @return $this
     * @see AdminLog::offset
     */
    public static function offset($offset)
    {
    }

    /**
     * Sets the maximum number of results to retrieve (the "limit")
     *
     * @param int|float|string $limit The maximum number of results to retrieve
     * @return $this
     * @see AdminLog::limit
     */
    public static function limit($limit)
    {
    }

    /**
     * Sets the page number, the "OFFSET" value is equals "($page - 1) * LIMIT"
     *
     * @param int $page The page number
     * @return $this
     * @see AdminLog::page
     */
    public static function page($page)
    {
    }

    /**
     * Specifies an item that is to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns the selection expressions
     * @return $this
     * @see AdminLog::select
     */
    public static function select($columns = ['*']): self
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see AdminLog::selectDistinct
     */
    public static function selectDistinct($columns)
    {
    }

    /**
     * @param string $expression
     * @return $this
     * @see AdminLog::selectRaw
     */
    public static function selectRaw($expression)
    {
    }

    /**
     * Specifies columns that are not to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns
     * @return $this
     * @see AdminLog::selectExcept
     */
    public static function selectExcept($columns)
    {
    }

    /**
     * Sets table for FROM query
     *
     * @param string $table
     * @param string|null $alias
     * @return $this
     * @see AdminLog::from
     */
    public static function from($table, $alias = null): self
    {
    }

    /**
     * @param string $table
     * @param mixed|null $alias
     * @return $this
     * @see AdminLog::table
     */
    public static function table(string $table, $alias = null): self
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string $first
     * @param string $operator
     * @param string $second
     * @param string $type
     * @return $this
     * @see AdminLog::join
     */
    public static function join(string $table, string $first = null, string $operator = '=', string $second = null, string $type = 'INNER')
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::innerJoin
     */
    public static function innerJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a left join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::leftJoin
     */
    public static function leftJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a right join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::rightJoin
     */
    public static function rightJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Specifies one or more restrictions to the query result.
     * Replaces any previously specified restrictions, if any.
     *
     * ```php
     * $user = wei()->db('user')->where('id = 1');
     * $user = wei()->db('user')->where('id = ?', 1);
     * $users = wei()->db('user')->where(array('id' => '1', 'username' => 'twin'));
     * $users = wei()->where(array('id' => array('1', '2', '3')));
     * ```
     *
     * @param array|Closure|string|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::where
     */
    public static function where($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $expression
     * @param mixed $params
     * @return $this
     * @see AdminLog::whereRaw
     */
    public static function whereRaw($expression, $params = [])
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereBetween
     */
    public static function whereBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereNotBetween
     */
    public static function whereNotBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereIn
     */
    public static function whereIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereNotIn
     */
    public static function whereNotIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::whereNull
     */
    public static function whereNull($column)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::whereNotNULL
     */
    public static function whereNotNULL($column)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereDate
     */
    public static function whereDate($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereMonth
     */
    public static function whereMonth($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereDay
     */
    public static function whereDay($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereYear
     */
    public static function whereYear($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereTime
     */
    public static function whereTime($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string $opOrColumn2
     * @param string|null $column2
     * @return $this
     * @see AdminLog::whereColumn
     */
    public static function whereColumn($column, $opOrColumn2, $column2 = null)
    {
    }

    /**
     * 搜索字段是否包含某个值
     *
     * @param string $column
     * @param string $value
     * @param string $condition
     * @return $this
     * @see AdminLog::whereContains
     */
    public static function whereContains($column, $value, string $condition = 'AND')
    {
    }

    /**
     * @param mixed $column
     * @param mixed $value
     * @param string $condition
     * @return $this
     * @see AdminLog::whereNotContains
     */
    public static function whereNotContains($column, $value, string $condition = 'OR')
    {
    }

    /**
     * Specifies a grouping over the results of the query.
     * Replaces any previously specified groupings, if any.
     *
     * @param mixed $column the grouping column
     * @return $this
     * @see AdminLog::groupBy
     */
    public static function groupBy($column)
    {
    }

    /**
     * Specifies a restriction over the groups of the query.
     * Replaces any previous having restrictions, if any.
     *
     * @param mixed $column
     * @param mixed $operator
     * @param mixed|null $value
     * @param mixed $condition
     * @return $this
     * @see AdminLog::having
     */
    public static function having($column, $operator, $value = null, $condition = 'AND')
    {
    }

    /**
     * Specifies an ordering for the query results.
     * Replaces any previously specified orderings, if any.
     *
     * @param string $column the ordering expression
     * @param string $order the ordering direction
     * @return $this
     * @see AdminLog::orderBy
     */
    public static function orderBy($column, $order = 'ASC')
    {
    }

    /**
     * Adds a DESC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see AdminLog::desc
     */
    public static function desc($field)
    {
    }

    /**
     * Add an ASC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see AdminLog::asc
     */
    public static function asc($field)
    {
    }

    /**
     * @return $this
     * @see AdminLog::forUpdate
     */
    public static function forUpdate()
    {
    }

    /**
     * @return $this
     * @see AdminLog::forShare
     */
    public static function forShare()
    {
    }

    /**
     * @param string|bool $lock
     * @return $this
     * @see AdminLog::lock
     */
    public static function lock($lock)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see AdminLog::when
     */
    public static function when($value, $callback, callable $default = null)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see AdminLog::unless
     */
    public static function unless($value, callable $callback, callable $default = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see AdminLog::setDbKeyConverter
     */
    public static function setDbKeyConverter(callable $converter = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see AdminLog::setPhpKeyConverter
     */
    public static function setPhpKeyConverter(callable $converter = null)
    {
    }

    /**
     * Set or remove cache time for the query
     *
     * @param int|null $seconds
     * @return $this
     * @see AdminLog::setCacheTime
     */
    public static function setCacheTime(?int $seconds): self
    {
    }

    /**
     * @param array|string|true $scopes
     * @return $this
     * @see AdminLog::unscoped
     */
    public static function unscoped($scopes = [])
    {
    }
}

class AdminNav
{
}

class Group
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

class GroupModel
{
    /**
     * Returns the record data as array
     *
     * @param array|callable $returnFields A indexed array specified the fields to return
     * @param callable|null $prepend
     * @return array
     * @see GroupModel::toArray
     */
    public static function toArray($returnFields = [], callable $prepend = null)
    {
    }

    /**
     * 不经过fillable检查,设置数据并保存
     *
     * @param array $data
     * @return $this
     * @see GroupModel::saveData
     */
    public static function saveData($data = [])
    {
    }

    /**
     * Returns the success result with model data
     *
     * @param array $merge
     * @return Ret
     * @see GroupModel::toRet
     */
    public static function toRet(array $merge = [])
    {
    }

    /**
     * Return the record table name
     *
     * @return string
     * @see GroupModel::getTable
     */
    public static function getTable()
    {
    }

    /**
     * Import a PHP array in this record
     *
     * @param array|\ArrayAccess $data
     * @return $this
     * @see GroupModel::fromArray
     */
    public static function fromArray($data)
    {
    }

    /**
     * Save the record or data to database
     *
     * @param array $data
     * @return $this
     * @see GroupModel::save
     */
    public static function save($data = [])
    {
    }

    /**
     * Delete the current record and trigger the beforeDestroy and afterDestroy callback
     *
     * @param int|string $id
     * @return $this
     * @see GroupModel::destroy
     */
    public static function destroy($id = null)
    {
    }

    /**
     * Set the record field value
     *
     * @param string $name
     * @param mixed $value
     * @param bool $throwException
     * @return $this|false
     * @see GroupModel::set
     */
    public static function set($name, $value = null, $throwException = true)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or false
     *
     * @param int|string|array|null $id
     * @return $this|null
     * @see GroupModel::find
     */
    public static function find($id)
    {
    }

    /**
     * Find a record by primary key, or throws 404 exception if record not found
     *
     * @param int|string $id
     * @return $this
     * @throws \Exception
     * @see GroupModel::findOrFail
     */
    public static function findOrFail($id)
    {
    }

    /**
     * Find a record by primary key, or init with the specified data if record not found
     *
     * @param int|string $id
     * @param array|object $data
     * @return $this
     * @see GroupModel::findOrInit
     */
    public static function findOrInit($id = null, $data = [])
    {
    }

    /**
     * Find a record by primary key, or save with the specified data if record not found
     *
     * @param int|string $id
     * @param array $data
     * @return $this
     * @see GroupModel::findOrCreate
     */
    public static function findOrCreate($id, $data = [])
    {
    }

    /**
     * @param array $attributes
     * @param array $data
     * @return $this
     * @see GroupModel::findByOrCreate
     */
    public static function findByOrCreate($attributes, $data = [])
    {
    }

    /**
     * Executes the generated SQL and returns the found record collection object or false
     *
     * @param array $ids
     * @return $this|$this[]
     * @see GroupModel::findAll
     */
    public static function findAll($ids)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|null
     * @see GroupModel::findBy
     */
    public static function findBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|$this[]
     * @see GroupModel::findAllBy
     */
    public static function findAllBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array $attributes
     * @param array|object $data
     * @return $this
     * @see GroupModel::findOrInitBy
     */
    public static function findOrInitBy($attributes, $data = [])
    {
    }

    /**
     * Find a record by primary key value and throws 404 exception if record not found
     *
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @throws \Exception
     * @see GroupModel::findByOrFail
     */
    public static function findByOrFail($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array|Req|null $req
     * @return $this
     * @throws \Exception
     * @see GroupModel::findFromReq
     */
    public static function findFromReq($req = null)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or null if not found
     *
     * @return $this|null
     * @see GroupModel::first
     */
    public static function first()
    {
    }

    /**
     * @return $this|$this[]|array
     * @see GroupModel::all
     */
    public static function all()
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::indexBy
     */
    public static function indexBy($column)
    {
    }

    /**
     * Returns the name of fields of current table
     *
     * @return array
     * @see GroupModel::getColumns
     */
    public static function getColumns()
    {
    }

    /**
     * Executes the generated query and returns the first array result
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array|null
     * @see GroupModel::fetch
     */
    public static function fetch($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Executes the generated query and returns all array results
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array
     * @see GroupModel::fetchAll
     */
    public static function fetchAll($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string|null $index
     * @return array
     * @see GroupModel::pluck
     */
    public static function pluck(string $column, string $index = null)
    {
    }

    /**
     * @param int $count
     * @param callable $callback
     * @return bool
     * @see GroupModel::chunk
     */
    public static function chunk(int $count, callable $callback)
    {
    }

    /**
     * Executes a COUNT query to receive the rows number
     *
     * @param string $column
     * @return int
     * @see GroupModel::cnt
     */
    public static function cnt($column = '*')
    {
    }

    /**
     * Execute a update query with specified data
     *
     * @param array|string $set
     * @param mixed $value
     * @return int
     * @see GroupModel::update
     */
    public static function update($set = [], $value = null)
    {
    }

    /**
     * Execute a delete query with specified conditions
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return mixed
     * @see GroupModel::delete
     */
    public static function delete($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Sets the position of the first result to retrieve (the "offset")
     *
     * @param int|float|string $offset The first result to return
     * @return $this
     * @see GroupModel::offset
     */
    public static function offset($offset)
    {
    }

    /**
     * Sets the maximum number of results to retrieve (the "limit")
     *
     * @param int|float|string $limit The maximum number of results to retrieve
     * @return $this
     * @see GroupModel::limit
     */
    public static function limit($limit)
    {
    }

    /**
     * Sets the page number, the "OFFSET" value is equals "($page - 1) * LIMIT"
     *
     * @param int $page The page number
     * @return $this
     * @see GroupModel::page
     */
    public static function page($page)
    {
    }

    /**
     * Specifies an item that is to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns the selection expressions
     * @return $this
     * @see GroupModel::select
     */
    public static function select($columns = ['*']): self
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see GroupModel::selectDistinct
     */
    public static function selectDistinct($columns)
    {
    }

    /**
     * @param string $expression
     * @return $this
     * @see GroupModel::selectRaw
     */
    public static function selectRaw($expression)
    {
    }

    /**
     * Specifies columns that are not to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns
     * @return $this
     * @see GroupModel::selectExcept
     */
    public static function selectExcept($columns)
    {
    }

    /**
     * Sets table for FROM query
     *
     * @param string $table
     * @param string|null $alias
     * @return $this
     * @see GroupModel::from
     */
    public static function from($table, $alias = null): self
    {
    }

    /**
     * @param string $table
     * @param mixed|null $alias
     * @return $this
     * @see GroupModel::table
     */
    public static function table(string $table, $alias = null): self
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string $first
     * @param string $operator
     * @param string $second
     * @param string $type
     * @return $this
     * @see GroupModel::join
     */
    public static function join(string $table, string $first = null, string $operator = '=', string $second = null, string $type = 'INNER')
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::innerJoin
     */
    public static function innerJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a left join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::leftJoin
     */
    public static function leftJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a right join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::rightJoin
     */
    public static function rightJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Specifies one or more restrictions to the query result.
     * Replaces any previously specified restrictions, if any.
     *
     * ```php
     * $user = wei()->db('user')->where('id = 1');
     * $user = wei()->db('user')->where('id = ?', 1);
     * $users = wei()->db('user')->where(array('id' => '1', 'username' => 'twin'));
     * $users = wei()->where(array('id' => array('1', '2', '3')));
     * ```
     *
     * @param array|Closure|string|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::where
     */
    public static function where($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $expression
     * @param mixed $params
     * @return $this
     * @see GroupModel::whereRaw
     */
    public static function whereRaw($expression, $params = [])
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereBetween
     */
    public static function whereBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereNotBetween
     */
    public static function whereNotBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereIn
     */
    public static function whereIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereNotIn
     */
    public static function whereNotIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::whereNull
     */
    public static function whereNull($column)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::whereNotNULL
     */
    public static function whereNotNULL($column)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereDate
     */
    public static function whereDate($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereMonth
     */
    public static function whereMonth($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereDay
     */
    public static function whereDay($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereYear
     */
    public static function whereYear($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereTime
     */
    public static function whereTime($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string $opOrColumn2
     * @param string|null $column2
     * @return $this
     * @see GroupModel::whereColumn
     */
    public static function whereColumn($column, $opOrColumn2, $column2 = null)
    {
    }

    /**
     * 搜索字段是否包含某个值
     *
     * @param string $column
     * @param string $value
     * @param string $condition
     * @return $this
     * @see GroupModel::whereContains
     */
    public static function whereContains($column, $value, string $condition = 'AND')
    {
    }

    /**
     * @param mixed $column
     * @param mixed $value
     * @param string $condition
     * @return $this
     * @see GroupModel::whereNotContains
     */
    public static function whereNotContains($column, $value, string $condition = 'OR')
    {
    }

    /**
     * Specifies a grouping over the results of the query.
     * Replaces any previously specified groupings, if any.
     *
     * @param mixed $column the grouping column
     * @return $this
     * @see GroupModel::groupBy
     */
    public static function groupBy($column)
    {
    }

    /**
     * Specifies a restriction over the groups of the query.
     * Replaces any previous having restrictions, if any.
     *
     * @param mixed $column
     * @param mixed $operator
     * @param mixed|null $value
     * @param mixed $condition
     * @return $this
     * @see GroupModel::having
     */
    public static function having($column, $operator, $value = null, $condition = 'AND')
    {
    }

    /**
     * Specifies an ordering for the query results.
     * Replaces any previously specified orderings, if any.
     *
     * @param string $column the ordering expression
     * @param string $order the ordering direction
     * @return $this
     * @see GroupModel::orderBy
     */
    public static function orderBy($column, $order = 'ASC')
    {
    }

    /**
     * Adds a DESC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see GroupModel::desc
     */
    public static function desc($field)
    {
    }

    /**
     * Add an ASC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see GroupModel::asc
     */
    public static function asc($field)
    {
    }

    /**
     * @return $this
     * @see GroupModel::forUpdate
     */
    public static function forUpdate()
    {
    }

    /**
     * @return $this
     * @see GroupModel::forShare
     */
    public static function forShare()
    {
    }

    /**
     * @param string|bool $lock
     * @return $this
     * @see GroupModel::lock
     */
    public static function lock($lock)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see GroupModel::when
     */
    public static function when($value, $callback, callable $default = null)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see GroupModel::unless
     */
    public static function unless($value, callable $callback, callable $default = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see GroupModel::setDbKeyConverter
     */
    public static function setDbKeyConverter(callable $converter = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see GroupModel::setPhpKeyConverter
     */
    public static function setPhpKeyConverter(callable $converter = null)
    {
    }

    /**
     * Set or remove cache time for the query
     *
     * @param int|null $seconds
     * @return $this
     * @see GroupModel::setCacheTime
     */
    public static function setCacheTime(?int $seconds): self
    {
    }

    /**
     * @param array|string|true $scopes
     * @return $this
     * @see GroupModel::unscoped
     */
    public static function unscoped($scopes = [])
    {
    }

    /**
     * Really remove the record from database
     *
     * @param mixed $conditions
     * @return $this
     * @see GroupModel::reallyDestroy
     */
    public static function reallyDestroy($conditions = false)
    {
    }

    /**
     * Add a query to filter soft deleted records
     *
     * @return $this
     * @see GroupModel::withoutDeleted
     */
    public static function withoutDeleted()
    {
    }

    /**
     * Add a query to return only deleted records
     *
     * @return $this
     * @see GroupModel::onlyDeleted
     */
    public static function onlyDeleted()
    {
    }

    /**
     * Remove "withoutDeleted" in the query, expect to return all records
     *
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

namespace Miaoxing\Admin\Service;

if (0) {
class AdminLog
{
    /**
     * Returns the record data as array
     *
     * @param array|callable $returnFields A indexed array specified the fields to return
     * @param callable|null $prepend
     * @return array
     * @see AdminLog::toArray
     */
    public function toArray($returnFields = [], callable $prepend = null)
    {
    }

    /**
     * 不经过fillable检查,设置数据并保存
     *
     * @param array $data
     * @return $this
     * @see AdminLog::saveData
     */
    public function saveData($data = [])
    {
    }

    /**
     * Returns the success result with model data
     *
     * @param array $merge
     * @return Ret
     * @see AdminLog::toRet
     */
    public function toRet(array $merge = [])
    {
    }

    /**
     * Return the record table name
     *
     * @return string
     * @see AdminLog::getTable
     */
    public function getTable()
    {
    }

    /**
     * Import a PHP array in this record
     *
     * @param array|\ArrayAccess $data
     * @return $this
     * @see AdminLog::fromArray
     */
    public function fromArray($data)
    {
    }

    /**
     * Save the record or data to database
     *
     * @param array $data
     * @return $this
     * @see AdminLog::save
     */
    public function save($data = [])
    {
    }

    /**
     * Delete the current record and trigger the beforeDestroy and afterDestroy callback
     *
     * @param int|string $id
     * @return $this
     * @see AdminLog::destroy
     */
    public function destroy($id = null)
    {
    }

    /**
     * Set the record field value
     *
     * @param string $name
     * @param mixed $value
     * @param bool $throwException
     * @return $this|false
     * @see AdminLog::set
     */
    public function set($name, $value = null, $throwException = true)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or false
     *
     * @param int|string|array|null $id
     * @return $this|null
     * @see AdminLog::find
     */
    public function find($id)
    {
    }

    /**
     * Find a record by primary key, or throws 404 exception if record not found
     *
     * @param int|string $id
     * @return $this
     * @throws \Exception
     * @see AdminLog::findOrFail
     */
    public function findOrFail($id)
    {
    }

    /**
     * Find a record by primary key, or init with the specified data if record not found
     *
     * @param int|string $id
     * @param array|object $data
     * @return $this
     * @see AdminLog::findOrInit
     */
    public function findOrInit($id = null, $data = [])
    {
    }

    /**
     * Find a record by primary key, or save with the specified data if record not found
     *
     * @param int|string $id
     * @param array $data
     * @return $this
     * @see AdminLog::findOrCreate
     */
    public function findOrCreate($id, $data = [])
    {
    }

    /**
     * @param array $attributes
     * @param array $data
     * @return $this
     * @see AdminLog::findByOrCreate
     */
    public function findByOrCreate($attributes, $data = [])
    {
    }

    /**
     * Executes the generated SQL and returns the found record collection object or false
     *
     * @param array $ids
     * @return $this|$this[]
     * @see AdminLog::findAll
     */
    public function findAll($ids)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|null
     * @see AdminLog::findBy
     */
    public function findBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|$this[]
     * @see AdminLog::findAllBy
     */
    public function findAllBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array $attributes
     * @param array|object $data
     * @return $this
     * @see AdminLog::findOrInitBy
     */
    public function findOrInitBy($attributes, $data = [])
    {
    }

    /**
     * Find a record by primary key value and throws 404 exception if record not found
     *
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @throws \Exception
     * @see AdminLog::findByOrFail
     */
    public function findByOrFail($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array|Req|null $req
     * @return $this
     * @throws \Exception
     * @see AdminLog::findFromReq
     */
    public function findFromReq($req = null)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or null if not found
     *
     * @return $this|null
     * @see AdminLog::first
     */
    public function first()
    {
    }

    /**
     * @return $this|$this[]|array
     * @see AdminLog::all
     */
    public function all()
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::indexBy
     */
    public function indexBy($column)
    {
    }

    /**
     * Returns the name of fields of current table
     *
     * @return array
     * @see AdminLog::getColumns
     */
    public function getColumns()
    {
    }

    /**
     * Executes the generated query and returns the first array result
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array|null
     * @see AdminLog::fetch
     */
    public function fetch($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Executes the generated query and returns all array results
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array
     * @see AdminLog::fetchAll
     */
    public function fetchAll($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string|null $index
     * @return array
     * @see AdminLog::pluck
     */
    public function pluck(string $column, string $index = null)
    {
    }

    /**
     * @param int $count
     * @param callable $callback
     * @return bool
     * @see AdminLog::chunk
     */
    public function chunk(int $count, callable $callback)
    {
    }

    /**
     * Executes a COUNT query to receive the rows number
     *
     * @param string $column
     * @return int
     * @see AdminLog::cnt
     */
    public function cnt($column = '*')
    {
    }

    /**
     * Execute a update query with specified data
     *
     * @param array|string $set
     * @param mixed $value
     * @return int
     * @see AdminLog::update
     */
    public function update($set = [], $value = null)
    {
    }

    /**
     * Execute a delete query with specified conditions
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return mixed
     * @see AdminLog::delete
     */
    public function delete($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Sets the position of the first result to retrieve (the "offset")
     *
     * @param int|float|string $offset The first result to return
     * @return $this
     * @see AdminLog::offset
     */
    public function offset($offset)
    {
    }

    /**
     * Sets the maximum number of results to retrieve (the "limit")
     *
     * @param int|float|string $limit The maximum number of results to retrieve
     * @return $this
     * @see AdminLog::limit
     */
    public function limit($limit)
    {
    }

    /**
     * Sets the page number, the "OFFSET" value is equals "($page - 1) * LIMIT"
     *
     * @param int $page The page number
     * @return $this
     * @see AdminLog::page
     */
    public function page($page)
    {
    }

    /**
     * Specifies an item that is to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns the selection expressions
     * @return $this
     * @see AdminLog::select
     */
    public function select($columns = ['*']): self
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see AdminLog::selectDistinct
     */
    public function selectDistinct($columns)
    {
    }

    /**
     * @param string $expression
     * @return $this
     * @see AdminLog::selectRaw
     */
    public function selectRaw($expression)
    {
    }

    /**
     * Specifies columns that are not to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns
     * @return $this
     * @see AdminLog::selectExcept
     */
    public function selectExcept($columns)
    {
    }

    /**
     * Sets table for FROM query
     *
     * @param string $table
     * @param string|null $alias
     * @return $this
     * @see AdminLog::from
     */
    public function from($table, $alias = null): self
    {
    }

    /**
     * @param string $table
     * @param mixed|null $alias
     * @return $this
     * @see AdminLog::table
     */
    public function table(string $table, $alias = null): self
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string $first
     * @param string $operator
     * @param string $second
     * @param string $type
     * @return $this
     * @see AdminLog::join
     */
    public function join(string $table, string $first = null, string $operator = '=', string $second = null, string $type = 'INNER')
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::innerJoin
     */
    public function innerJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a left join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::leftJoin
     */
    public function leftJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a right join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see AdminLog::rightJoin
     */
    public function rightJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Specifies one or more restrictions to the query result.
     * Replaces any previously specified restrictions, if any.
     *
     * ```php
     * $user = wei()->db('user')->where('id = 1');
     * $user = wei()->db('user')->where('id = ?', 1);
     * $users = wei()->db('user')->where(array('id' => '1', 'username' => 'twin'));
     * $users = wei()->where(array('id' => array('1', '2', '3')));
     * ```
     *
     * @param array|Closure|string|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::where
     */
    public function where($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $expression
     * @param mixed $params
     * @return $this
     * @see AdminLog::whereRaw
     */
    public function whereRaw($expression, $params = [])
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereBetween
     */
    public function whereBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereNotBetween
     */
    public function whereNotBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereIn
     */
    public function whereIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see AdminLog::whereNotIn
     */
    public function whereNotIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::whereNull
     */
    public function whereNull($column)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see AdminLog::whereNotNULL
     */
    public function whereNotNULL($column)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereDate
     */
    public function whereDate($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereMonth
     */
    public function whereMonth($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereDay
     */
    public function whereDay($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereYear
     */
    public function whereYear($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see AdminLog::whereTime
     */
    public function whereTime($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string $opOrColumn2
     * @param string|null $column2
     * @return $this
     * @see AdminLog::whereColumn
     */
    public function whereColumn($column, $opOrColumn2, $column2 = null)
    {
    }

    /**
     * 搜索字段是否包含某个值
     *
     * @param string $column
     * @param string $value
     * @param string $condition
     * @return $this
     * @see AdminLog::whereContains
     */
    public function whereContains($column, $value, string $condition = 'AND')
    {
    }

    /**
     * @param mixed $column
     * @param mixed $value
     * @param string $condition
     * @return $this
     * @see AdminLog::whereNotContains
     */
    public function whereNotContains($column, $value, string $condition = 'OR')
    {
    }

    /**
     * Specifies a grouping over the results of the query.
     * Replaces any previously specified groupings, if any.
     *
     * @param mixed $column the grouping column
     * @return $this
     * @see AdminLog::groupBy
     */
    public function groupBy($column)
    {
    }

    /**
     * Specifies a restriction over the groups of the query.
     * Replaces any previous having restrictions, if any.
     *
     * @param mixed $column
     * @param mixed $operator
     * @param mixed|null $value
     * @param mixed $condition
     * @return $this
     * @see AdminLog::having
     */
    public function having($column, $operator, $value = null, $condition = 'AND')
    {
    }

    /**
     * Specifies an ordering for the query results.
     * Replaces any previously specified orderings, if any.
     *
     * @param string $column the ordering expression
     * @param string $order the ordering direction
     * @return $this
     * @see AdminLog::orderBy
     */
    public function orderBy($column, $order = 'ASC')
    {
    }

    /**
     * Adds a DESC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see AdminLog::desc
     */
    public function desc($field)
    {
    }

    /**
     * Add an ASC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see AdminLog::asc
     */
    public function asc($field)
    {
    }

    /**
     * @return $this
     * @see AdminLog::forUpdate
     */
    public function forUpdate()
    {
    }

    /**
     * @return $this
     * @see AdminLog::forShare
     */
    public function forShare()
    {
    }

    /**
     * @param string|bool $lock
     * @return $this
     * @see AdminLog::lock
     */
    public function lock($lock)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see AdminLog::when
     */
    public function when($value, $callback, callable $default = null)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see AdminLog::unless
     */
    public function unless($value, callable $callback, callable $default = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see AdminLog::setDbKeyConverter
     */
    public function setDbKeyConverter(callable $converter = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see AdminLog::setPhpKeyConverter
     */
    public function setPhpKeyConverter(callable $converter = null)
    {
    }

    /**
     * Set or remove cache time for the query
     *
     * @param int|null $seconds
     * @return $this
     * @see AdminLog::setCacheTime
     */
    public function setCacheTime(?int $seconds): self
    {
    }

    /**
     * @param array|string|true $scopes
     * @return $this
     * @see AdminLog::unscoped
     */
    public function unscoped($scopes = [])
    {
    }
}

class AdminNav
{
}

class Group
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

class GroupModel
{
    /**
     * Returns the record data as array
     *
     * @param array|callable $returnFields A indexed array specified the fields to return
     * @param callable|null $prepend
     * @return array
     * @see GroupModel::toArray
     */
    public function toArray($returnFields = [], callable $prepend = null)
    {
    }

    /**
     * 不经过fillable检查,设置数据并保存
     *
     * @param array $data
     * @return $this
     * @see GroupModel::saveData
     */
    public function saveData($data = [])
    {
    }

    /**
     * Returns the success result with model data
     *
     * @param array $merge
     * @return Ret
     * @see GroupModel::toRet
     */
    public function toRet(array $merge = [])
    {
    }

    /**
     * Return the record table name
     *
     * @return string
     * @see GroupModel::getTable
     */
    public function getTable()
    {
    }

    /**
     * Import a PHP array in this record
     *
     * @param array|\ArrayAccess $data
     * @return $this
     * @see GroupModel::fromArray
     */
    public function fromArray($data)
    {
    }

    /**
     * Save the record or data to database
     *
     * @param array $data
     * @return $this
     * @see GroupModel::save
     */
    public function save($data = [])
    {
    }

    /**
     * Delete the current record and trigger the beforeDestroy and afterDestroy callback
     *
     * @param int|string $id
     * @return $this
     * @see GroupModel::destroy
     */
    public function destroy($id = null)
    {
    }

    /**
     * Set the record field value
     *
     * @param string $name
     * @param mixed $value
     * @param bool $throwException
     * @return $this|false
     * @see GroupModel::set
     */
    public function set($name, $value = null, $throwException = true)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or false
     *
     * @param int|string|array|null $id
     * @return $this|null
     * @see GroupModel::find
     */
    public function find($id)
    {
    }

    /**
     * Find a record by primary key, or throws 404 exception if record not found
     *
     * @param int|string $id
     * @return $this
     * @throws \Exception
     * @see GroupModel::findOrFail
     */
    public function findOrFail($id)
    {
    }

    /**
     * Find a record by primary key, or init with the specified data if record not found
     *
     * @param int|string $id
     * @param array|object $data
     * @return $this
     * @see GroupModel::findOrInit
     */
    public function findOrInit($id = null, $data = [])
    {
    }

    /**
     * Find a record by primary key, or save with the specified data if record not found
     *
     * @param int|string $id
     * @param array $data
     * @return $this
     * @see GroupModel::findOrCreate
     */
    public function findOrCreate($id, $data = [])
    {
    }

    /**
     * @param array $attributes
     * @param array $data
     * @return $this
     * @see GroupModel::findByOrCreate
     */
    public function findByOrCreate($attributes, $data = [])
    {
    }

    /**
     * Executes the generated SQL and returns the found record collection object or false
     *
     * @param array $ids
     * @return $this|$this[]
     * @see GroupModel::findAll
     */
    public function findAll($ids)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|null
     * @see GroupModel::findBy
     */
    public function findBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this|$this[]
     * @see GroupModel::findAllBy
     */
    public function findAllBy($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array $attributes
     * @param array|object $data
     * @return $this
     * @see GroupModel::findOrInitBy
     */
    public function findOrInitBy($attributes, $data = [])
    {
    }

    /**
     * Find a record by primary key value and throws 404 exception if record not found
     *
     * @param mixed $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @throws \Exception
     * @see GroupModel::findByOrFail
     */
    public function findByOrFail($column, $operator = null, $value = null)
    {
    }

    /**
     * @param array|Req|null $req
     * @return $this
     * @throws \Exception
     * @see GroupModel::findFromReq
     */
    public function findFromReq($req = null)
    {
    }

    /**
     * Executes the generated SQL and returns the found record object or null if not found
     *
     * @return $this|null
     * @see GroupModel::first
     */
    public function first()
    {
    }

    /**
     * @return $this|$this[]|array
     * @see GroupModel::all
     */
    public function all()
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::indexBy
     */
    public function indexBy($column)
    {
    }

    /**
     * Returns the name of fields of current table
     *
     * @return array
     * @see GroupModel::getColumns
     */
    public function getColumns()
    {
    }

    /**
     * Executes the generated query and returns the first array result
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array|null
     * @see GroupModel::fetch
     */
    public function fetch($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Executes the generated query and returns all array results
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return array
     * @see GroupModel::fetchAll
     */
    public function fetchAll($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string|null $index
     * @return array
     * @see GroupModel::pluck
     */
    public function pluck(string $column, string $index = null)
    {
    }

    /**
     * @param int $count
     * @param callable $callback
     * @return bool
     * @see GroupModel::chunk
     */
    public function chunk(int $count, callable $callback)
    {
    }

    /**
     * Executes a COUNT query to receive the rows number
     *
     * @param string $column
     * @return int
     * @see GroupModel::cnt
     */
    public function cnt($column = '*')
    {
    }

    /**
     * Execute a update query with specified data
     *
     * @param array|string $set
     * @param mixed $value
     * @return int
     * @see GroupModel::update
     */
    public function update($set = [], $value = null)
    {
    }

    /**
     * Execute a delete query with specified conditions
     *
     * @param mixed|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return mixed
     * @see GroupModel::delete
     */
    public function delete($column = null, $operator = null, $value = null)
    {
    }

    /**
     * Sets the position of the first result to retrieve (the "offset")
     *
     * @param int|float|string $offset The first result to return
     * @return $this
     * @see GroupModel::offset
     */
    public function offset($offset)
    {
    }

    /**
     * Sets the maximum number of results to retrieve (the "limit")
     *
     * @param int|float|string $limit The maximum number of results to retrieve
     * @return $this
     * @see GroupModel::limit
     */
    public function limit($limit)
    {
    }

    /**
     * Sets the page number, the "OFFSET" value is equals "($page - 1) * LIMIT"
     *
     * @param int $page The page number
     * @return $this
     * @see GroupModel::page
     */
    public function page($page)
    {
    }

    /**
     * Specifies an item that is to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns the selection expressions
     * @return $this
     * @see GroupModel::select
     */
    public function select($columns = ['*']): self
    {
    }

    /**
     * @param array|string $columns
     * @return $this
     * @see GroupModel::selectDistinct
     */
    public function selectDistinct($columns)
    {
    }

    /**
     * @param string $expression
     * @return $this
     * @see GroupModel::selectRaw
     */
    public function selectRaw($expression)
    {
    }

    /**
     * Specifies columns that are not to be returned in the query result.
     * Replaces any previously specified selections, if any.
     *
     * @param array|string $columns
     * @return $this
     * @see GroupModel::selectExcept
     */
    public function selectExcept($columns)
    {
    }

    /**
     * Sets table for FROM query
     *
     * @param string $table
     * @param string|null $alias
     * @return $this
     * @see GroupModel::from
     */
    public function from($table, $alias = null): self
    {
    }

    /**
     * @param string $table
     * @param mixed|null $alias
     * @return $this
     * @see GroupModel::table
     */
    public function table(string $table, $alias = null): self
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string $first
     * @param string $operator
     * @param string $second
     * @param string $type
     * @return $this
     * @see GroupModel::join
     */
    public function join(string $table, string $first = null, string $operator = '=', string $second = null, string $type = 'INNER')
    {
    }

    /**
     * Adds a inner join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::innerJoin
     */
    public function innerJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a left join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::leftJoin
     */
    public function leftJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Adds a right join to the query
     *
     * @param string $table The table name to join
     * @param string|null $first
     * @param string $operator
     * @param string|null $second
     * @return $this
     * @see GroupModel::rightJoin
     */
    public function rightJoin(string $table, string $first = null, string $operator = '=', string $second = null)
    {
    }

    /**
     * Specifies one or more restrictions to the query result.
     * Replaces any previously specified restrictions, if any.
     *
     * ```php
     * $user = wei()->db('user')->where('id = 1');
     * $user = wei()->db('user')->where('id = ?', 1);
     * $users = wei()->db('user')->where(array('id' => '1', 'username' => 'twin'));
     * $users = wei()->where(array('id' => array('1', '2', '3')));
     * ```
     *
     * @param array|Closure|string|null $column
     * @param mixed|null $operator
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::where
     */
    public function where($column = null, $operator = null, $value = null)
    {
    }

    /**
     * @param string $expression
     * @param mixed $params
     * @return $this
     * @see GroupModel::whereRaw
     */
    public function whereRaw($expression, $params = [])
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereBetween
     */
    public function whereBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereNotBetween
     */
    public function whereNotBetween($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereIn
     */
    public function whereIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @param array $params
     * @return $this
     * @see GroupModel::whereNotIn
     */
    public function whereNotIn($column, array $params)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::whereNull
     */
    public function whereNull($column)
    {
    }

    /**
     * @param string $column
     * @return $this
     * @see GroupModel::whereNotNULL
     */
    public function whereNotNULL($column)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereDate
     */
    public function whereDate($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereMonth
     */
    public function whereMonth($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereDay
     */
    public function whereDay($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereYear
     */
    public function whereYear($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param mixed $opOrValue
     * @param mixed|null $value
     * @return $this
     * @see GroupModel::whereTime
     */
    public function whereTime($column, $opOrValue, $value = null)
    {
    }

    /**
     * @param string $column
     * @param string $opOrColumn2
     * @param string|null $column2
     * @return $this
     * @see GroupModel::whereColumn
     */
    public function whereColumn($column, $opOrColumn2, $column2 = null)
    {
    }

    /**
     * 搜索字段是否包含某个值
     *
     * @param string $column
     * @param string $value
     * @param string $condition
     * @return $this
     * @see GroupModel::whereContains
     */
    public function whereContains($column, $value, string $condition = 'AND')
    {
    }

    /**
     * @param mixed $column
     * @param mixed $value
     * @param string $condition
     * @return $this
     * @see GroupModel::whereNotContains
     */
    public function whereNotContains($column, $value, string $condition = 'OR')
    {
    }

    /**
     * Specifies a grouping over the results of the query.
     * Replaces any previously specified groupings, if any.
     *
     * @param mixed $column the grouping column
     * @return $this
     * @see GroupModel::groupBy
     */
    public function groupBy($column)
    {
    }

    /**
     * Specifies a restriction over the groups of the query.
     * Replaces any previous having restrictions, if any.
     *
     * @param mixed $column
     * @param mixed $operator
     * @param mixed|null $value
     * @param mixed $condition
     * @return $this
     * @see GroupModel::having
     */
    public function having($column, $operator, $value = null, $condition = 'AND')
    {
    }

    /**
     * Specifies an ordering for the query results.
     * Replaces any previously specified orderings, if any.
     *
     * @param string $column the ordering expression
     * @param string $order the ordering direction
     * @return $this
     * @see GroupModel::orderBy
     */
    public function orderBy($column, $order = 'ASC')
    {
    }

    /**
     * Adds a DESC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see GroupModel::desc
     */
    public function desc($field)
    {
    }

    /**
     * Add an ASC ordering to the query
     *
     * @param string $field The name of field
     * @return $this
     * @see GroupModel::asc
     */
    public function asc($field)
    {
    }

    /**
     * @return $this
     * @see GroupModel::forUpdate
     */
    public function forUpdate()
    {
    }

    /**
     * @return $this
     * @see GroupModel::forShare
     */
    public function forShare()
    {
    }

    /**
     * @param string|bool $lock
     * @return $this
     * @see GroupModel::lock
     */
    public function lock($lock)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see GroupModel::when
     */
    public function when($value, $callback, callable $default = null)
    {
    }

    /**
     * @param mixed $value
     * @param callable $callback
     * @param callable|null $default
     * @return $this
     * @see GroupModel::unless
     */
    public function unless($value, callable $callback, callable $default = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see GroupModel::setDbKeyConverter
     */
    public function setDbKeyConverter(callable $converter = null)
    {
    }

    /**
     * @param callable|null $converter
     * @return $this
     * @see GroupModel::setPhpKeyConverter
     */
    public function setPhpKeyConverter(callable $converter = null)
    {
    }

    /**
     * Set or remove cache time for the query
     *
     * @param int|null $seconds
     * @return $this
     * @see GroupModel::setCacheTime
     */
    public function setCacheTime(?int $seconds): self
    {
    }

    /**
     * @param array|string|true $scopes
     * @return $this
     * @see GroupModel::unscoped
     */
    public function unscoped($scopes = [])
    {
    }

    /**
     * Really remove the record from database
     *
     * @param mixed $conditions
     * @return $this
     * @see GroupModel::reallyDestroy
     */
    public function reallyDestroy($conditions = false)
    {
    }

    /**
     * Add a query to filter soft deleted records
     *
     * @return $this
     * @see GroupModel::withoutDeleted
     */
    public function withoutDeleted()
    {
    }

    /**
     * Add a query to return only deleted records
     *
     * @return $this
     * @see GroupModel::onlyDeleted
     */
    public function onlyDeleted()
    {
    }

    /**
     * Remove "withoutDeleted" in the query, expect to return all records
     *
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
}
