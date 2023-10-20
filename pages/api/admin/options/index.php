<?php

use Miaoxing\App\Middleware\CheckPagePermission;
use Miaoxing\Plugin\BasePage;

return new /**
 * @experimental
 */
class () extends BasePage {
    public function init()
    {
        parent::init();
        $this->removeMiddleware(CheckPagePermission::class);
    }

    public function get($req)
    {
        $data = [];
        $ids = explode(',', (string) $req['id']);
        foreach ($ids as $id) {
            $separator = false !== strpos($id, '.') ? '.' : '-';
            [$name, $option] = explode($separator, $id);

            if (!$this->wei->has($name)) {
                return err('服务不存在');
            }
            $service = $this->wei->get($name);

            if (!property_exists($service, $option)) {
                return err(['选项 %s 不存在', $id]);
            }

            $property = new \ReflectionProperty($service, $option);
            if (!str_contains($property->getDocComment(), '@api')) {
                return err(['选项 %s 不存在', $id]);
            }

            $data[$id] = $service->getOption($option);
        }

        return suc([
            'data' => count($ids) > 1 ? $data : current($data),
        ]);
    }
};
