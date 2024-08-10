<?php

use Miaoxing\Plugin\BasePage;
use Miaoxing\Plugin\ConstTrait;

return new class extends BasePage {
    /**
     * @experimental
     * @param mixed $req
     */
    public function get($req)
    {
        [$name, $prefix] = explode('-', $req['id']);

        if (!$this->wei->has($name)) {
            return err('服务不存在');
        }

        $service = $this->wei->get($name);
        if (!in_array(ConstTrait::class, class_uses($service), true)) {
            return err('服务没有配置常量');
        }

        /** @var ConstTrait $service */
        $data = $service->getConsts($prefix);
        if (!$data) {
            return err('常量前缀不存在');
        }

        return suc([
            'data' => [
                'items' => $data,
            ],
        ]);
    }
};
