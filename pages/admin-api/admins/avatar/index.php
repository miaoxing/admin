<?php

return new class extends \Miaoxing\Plugin\BaseController {
    public function post()
    {
        $upload = wei()->upload;
        $result = $upload([
            'exts' => ['jpg', 'jpeg', 'bmp', 'png', 'gif'],
        ]);

        if (!$result) {
            return err($upload->getFirstMessage());
        }

        return suc([
            'url' => $upload->getUrl(),
        ]);
    }
};
