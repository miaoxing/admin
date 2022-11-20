import {SearchItem, useForm} from '@mxjs/a-form';
import propTypes from 'prop-types';
import {Button, Col} from 'antd';
import curUrl from '@mxjs/cur-url';
import appendUrl from 'append-url';
import $ from 'miaoxing';

const decodeUtf8 = (string) => {
  return decodeURIComponent(escape(string));
};

const SearchItemExport = ({url = ''}) => {
  const form = useForm();

  const handleClickExport = async () => {
    const values = {...form.convertOutput(form.getFieldsValue()), format: 'xlsx'};

    const response = await $.get({
      url: url ? appendUrl(url, values) : curUrl.apiIndex(values),
      responseType: 'blob',
    });

    const name = decodeUtf8(response.headers['content-disposition'].split('filename=')[1]);

    const blob = new Blob([response.data], {
      type: response.headers['content-type'],
    });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name;
    link.click();
  };

  return (
    <Col span={24}>
      <SearchItem wrapperCol={{offset: 8}}>
        <Button onClick={handleClickExport}>导出</Button>
      </SearchItem>
    </Col>
  );
};

SearchItemExport.propTypes = {
  url: propTypes.string,
};

export default SearchItemExport;
