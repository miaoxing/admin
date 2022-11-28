<?php

namespace Miaoxing\Admin\Service\AdminMenu;

use JsonSerializable;

/**
 * @experimental May be rename
 */
class Item implements JsonSerializable
{
    /**
     * @var string|null
     */
    protected $name;

    /**
     * @var string|null
     */
    protected $label;

    /**
     * @var string|null
     */
    protected $url;

    /**
     * @var int
     */
    protected $sort = 50;

    /**
     * @var array
     */
    protected $extras = [];

    /**
     * @var array<Item>
     */
    protected $children = [];

    /**
     * @param string|null $name
     * @return static
     */
    public static function new(string $name = null): self
    {
        return new static($name);
    }

    /**
     * @param string|null $name
     */
    public function __construct(string $name = null)
    {
        $this->setName($name);
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     * @return $this
     */
    public function setName(?string $name): self
    {
        $this->name = $name;
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
     * @param string $name
     * @param mixed $value
     * @return $this
     */
    public function setExtra(string $name, $value): self
    {
        $this->extras[$name] = $value;
        return $this;
    }

    /**
     * @param string $name
     * @return mixed
     */
    public function getExtra(string $name)
    {
        return $this->extras[$name] ?? null;
    }

    /**
     * @param string|Item $name
     * @return $this
     */
    public function addChild($name = null): self
    {
        $item = $name instanceof self ? $name : self::new($name);

        if (null === $name) {
            $this->children[] = $item;
            $item->setName(array_key_last($this->children));
        } else {
            $this->children[$item->getName()] = $item;
        }

        return $item;
    }

    /**
     * @param string $name
     * @return $this|null
     */
    public function getChild(string $name): ?self
    {
        return $this->children[$name] ?? null;
    }

    /**
     * Get or add child by the name
     *
     * @param string $name
     * @return $this
     */
    public function child(string $name): self
    {
        return $this->children[$name] ?? $this->addChild($name);
    }

    /**
     * Remove child by the name
     *
     * @param string $name
     * @return $this
     */
    public function removeChild(string $name): self
    {
        unset($this->children[$name]);
        return $this;
    }

    /**
     * @return array
     */
    public function getChildren(): array
    {
        return $this->children;
    }

    /**
     * @return bool
     */
    public function hasChildren(): bool
    {
        return (bool) $this->children;
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
    public function toArray(): array
    {
        return [
                'name' => $this->name,
                'label' => $this->label,
                'url' => $this->url,
                'sort' => $this->sort,
                'children' => $this->childrenToArray($this->children),
            ] + $this->extras;
    }

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }

    /**
     * @param array<self> $children
     * @return array
     */
    protected function childrenToArray(array $children): array
    {
        // Remote empty item
        foreach ($children as $i => $child) {
            if ($child->isEmpty()) {
                unset($children[$i]);
            }
        }

        // Sort items
        usort($children, function ($childA, $childB) {
            return $childA->getSort() < $childB->getSort();
        });

        return $children;
    }
}
