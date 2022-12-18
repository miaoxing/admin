import {useEffect, useState} from 'react';
import api from '@mxjs/api';
import {TreeSelect as OriTreeSelect} from 'antd';
import propTypes from 'prop-types';
import $ from 'miaoxing';

const TreeSelect = (
  {
    url,
    beforeLoad,
    afterLoad,
    allowClear = true,
    showArrow = true,
    showSearch = true,
    treeDefaultExpandAll = true,
    fieldNames = {label: 'name', value: 'id', children: 'children'},
    prependData = [],
    ...props
  },
) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getMax(url, {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      beforeLoad && beforeLoad(ret);

      const data = Array.isArray(prependData) ? prependData : [prependData];
      setData(data.concat(ret.data));

      afterLoad && afterLoad(ret);
    });
  }, [url]);

  return (
    <OriTreeSelect
      treeData={data}
      allowClear={allowClear}
      showArrow={showArrow}
      showSearch={showSearch}
      treeDefaultExpandAll={treeDefaultExpandAll}
      fieldNames={fieldNames}
      {...props}
    />
  );
};

TreeSelect.propTypes = {
  url: propTypes.string,
  beforeLoad: propTypes.func,
  afterLoad: propTypes.func,
  prependData: propTypes.oneOfType([propTypes.object, propTypes.array]),
  allowClear: propTypes.bool,
  showArrow: propTypes.bool,
  showSearch: propTypes.bool,
  treeDefaultExpandAll: propTypes.bool,
  fieldNames: propTypes.object,
};

export default TreeSelect;
