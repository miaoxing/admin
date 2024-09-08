<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Admin\Metadata\AdminMenuTrait;
use Miaoxing\Plugin\BaseModel;
use Miaoxing\Plugin\Model\ModelTrait;
use Miaoxing\Plugin\Model\ReqQueryTrait;
use Miaoxing\Plugin\Model\SnowflakeTrait;
use Wei\Model\SoftDeleteTrait;
use Wei\Model\TreeTrait;

class AdminMenuModel extends BaseModel
{
    use AdminMenuTrait;
    use ModelTrait;
    use ReqQueryTrait;
    use SnowflakeTrait;
    use SoftDeleteTrait;
    use TreeTrait;

    protected $columns = [
        'metadata' => [
            'default' => [],
        ],
    ];

    protected $parentIdColumn = 'parentId';

    /**
     * @var array
     * @experimental
     */
    protected $privates = [];

    /**
     * @return string|null
     */
    public function getCode(): ?string
    {
        return $this->code;
    }

    /**
     * @param string|null $code
     * @return $this
     */
    public function setCode(?string $code): self
    {
        $this->code = $code;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getLabel(): ?string
    {
        return $this->label;
    }

    /**
     * @param string|null $label
     * @return $this
     */
    public function setLabel(?string $label): self
    {
        $this->label = $label;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @param string|null $url
     * @return $this
     */
    public function setUrl(?string $url): self
    {
        $this->url = $url;
        return $this;
    }

    /**
     * @param int $sort
     * @return $this
     */
    public function setSort(int $sort): self
    {
        $this->sort = $sort;
        return $this;
    }

    /**
     * @return int
     */
    public function getSort(): int
    {
        return $this->sort;
    }

    /**
     * @return string|null
     */
    public function getIcon(): ?string
    {
        return $this->icon;
    }

    /**
     * @param string|null $icon
     * @return $this
     */
    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;
        return $this;
    }

    /**
     * @param bool $isShow
     * @return $this
     */
    public function setIsShow(bool $isShow): self
    {
        $this->isShow = $isShow;
        return $this;
    }

    /**
     * @return bool
     */
    public function isShow(): bool
    {
        return $this->isShow;
    }

    /**
     * @param string $name
     * @param mixed $value
     * @return $this
     */
    public function setMetadata(string $name, $value): self
    {
        $this->metadata[$name] = $value;
        return $this;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function getMetadata(string $name)
    {
        return $this->metadata[$name] ?? null;
    }

    /**
     * @param array<string> $apis
     * @return $this
     */
    public function setApis(array $apis): self
    {
        $this->privates['apis'] = $apis;
        return $this;
    }

    /**
     * @return array<string>
     */
    public function getApis(): array
    {
        return $this->privates['apis'] ?? [];
    }

    /**
     * @param string|self $code
     * @return $this
     */
    public function addChild($code = null): self
    {
        $item = $code instanceof self ? $code : self::new()->setCode($code);

        if (null === $code) {
            $this->children[] = $item;
            $item->setCode(array_key_last($this->children->attributes));
        } else {
            $this->children[$item->getCode()] = $item;
        }

        return $item;
    }

    /**
     * @param string $code
     * @return $this|null
     */
    public function getChild(string $code): ?self
    {
        return $this->children->hasColl($code) ? $this->children[$code] : null;
    }

    /**
     * Get or add child by the name
     *
     * @param string $code
     * @return $this
     */
    public function child(string $code): self
    {
        return $this->getChild($code) ?? $this->addChild($code);
    }

    /**
     * Remove child by the name
     *
     * @param string $code
     * @return $this
     */
    public function removeChild(string $code): self
    {
        unset($this->children[$code]);
        return $this;
    }

    /**
     * Remove child by the URL
     *
     * @param string|array $url
     * @return $this
     */
    public function removeChildByUrl($url): self
    {
        $url = (array) $url;
        foreach ($this->children as $code => $child) {
            if (in_array($child->getUrl(), $url, true)) {
                $this->removeChild($code);
            }
        }
        return $this;
    }

    /**
     * @return bool
     */
    public function hasChildren(): bool
    {
        return count($this->children) > 0;
    }

    /**
     * @return bool
     */
    public function isEmpty(): bool
    {
        return !$this->hasChildren() && !$this->url;
    }

    /**
     * @return array
     */
    public function toMenu(): array
    {
        if ($this->coll) {
            return $this->childrenToMenu();
        }

        return array_merge([
            'code' => $this->code,
            'label' => $this->label,
            'url' => $this->url,
            'sort' => $this->sort,
            'icon' => $this->icon,
            'isShow' => $this->isShow,
            'children' => $this->children->toMenu(),
        ], $this->metadata);
    }

    /**
     * @return array
     * @coll
     */
    protected function childrenToMenu(): array
    {
        // Sort items
        usort($this->attributes, static function (self $childA, self $childB) {
            return $childA->getSort() < $childB->getSort();
        });

        $data = [];
        foreach ($this->attributes as $child) {
            // Remote empty item
            if (!$child->isEmpty()) {
                $data[] = $child->toMenu();
            }
        }

        return $data;
    }
}
