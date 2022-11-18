import {SearchItem, useForm} from '@mxjs/a-form';
import propTypes from 'prop-types';
import {Button, Col} from 'antd';
import curUrl from '@mxjs/cur-url';

const SearchItemExport = ({url = ''}) => {
  const form = useForm();

  const handleClickExport = async () => {
    const values = form.convertOutput(form.getFieldsValue());
    window.location = url || curUrl.toApi('export', values);
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
