import {useContext} from 'react';
import {SearchItem, useForm} from '@mxjs/a-form';
import propTypes from 'prop-types';
import {Button, Col} from 'antd';
import curUrl from '@mxjs/cur-url';
import appendUrl from 'append-url';
import $ from 'miaoxing';
import {TableContext} from '@mxjs/a-table';

const decodeUtf8 = (string) => {
  return decodeURIComponent(escape(string));
};

const getSortPrams = (sort) => {
  const params = Object.entries(sort);
  if (params.length === 0) {
    return {};
  }

  return {
    sort: params[0][0],
    order: params[0][1] === 'ascend' ? 'asc' : 'desc',
  };
};

const SearchItemExport = ({url = ''}) => {
  const form = useForm();
  const table = useContext(TableContext);

  const handleClickExport = async () => {
    const values = {...form.convertOutput(form.getFieldsValue()), ...getSortPrams(table.sort), format: 'xlsx'};

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
