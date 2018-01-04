<?php

namespace Miaoxing\Admin\Service;

use Miaoxing\Plugin\BaseService;

/**
 * Csv格式数据导出服务
 *
 * @property \Wei\Response $response
 */
class CsvExporter extends BaseService
{
    public function export($fileName, $data)
    {
        $res = $this->response;

        $res->setHeader(array(
            'Content-Encoding' => 'UTF-8',
            'Content-type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment;filename=' . $fileName . '.csv'
        ));
        $res->sendHeader();

        // 输出,同时转为GBK编码
        $handle = fopen('php://output', 'w');
        foreach ($data as $row) {
            foreach ($row as &$value) {
                if (!is_null($value) && !is_numeric($value)) {
                    $value = iconv('UTF-8', 'GBK', $value);
                }
            }
            fputcsv($handle, $row);
        }
        fclose($handle);

        return $res;
    }
}
