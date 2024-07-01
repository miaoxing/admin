import {useEffect, useState} from 'react';
import {Cascader as AntdCascader} from 'antd';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';

const find = (id, options, parentIds = []) => {
  for (const option of options) {
    if (id === option.id) {
      return [...parentIds, id];
    }
    if (option.children) {
      const result = find(id, option.children, [...parentIds, option.id]);
      if (result.length) {
        return result;
      }
    }
  }
  return [];
};

const Cascader = (
  {
    url,
    beforeLoad,
    afterLoad,
    onChange,
    value,
    fieldNames = {label: 'name', value: 'id', children: 'children'},
    prependData = [],
    ...props
  },
) => {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api.getMax(url, {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      beforeLoad && beforeLoad(ret);

      const data = Array.isArray(prependData) ? prependData : [prependData];
      setOptions(data.concat(ret.data));

      afterLoad && afterLoad(ret);
    });
  }, [url]);

  useEffect(() => {
    // 将单个值转换为数组
    setValues(find(value, options));
  }, [value, options]);

  const handleChange = (values) => {
    // 获取数组值的最后一项
    onChange(values.length ? values[values.length - 1] : '');
  };

  return (
    <AntdCascader
      options={options}
      value={values}
      onChange={handleChange}
      fieldNames={fieldNames}
      {...props}
    />
  );
};

Cascader.propTypes = {
  url: propTypes.string,
  beforeLoad: propTypes.func,
  afterLoad: propTypes.func,
  onChange: propTypes.func,
  value: propTypes.array,
  fieldNames: propTypes.object,
  prependData: propTypes.array,
};

export default Cascader;
