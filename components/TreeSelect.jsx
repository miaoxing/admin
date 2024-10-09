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
    showSearch = true,
    treeDefaultExpandAll = true,
    fieldNames = {label: 'name', value: 'id', children: 'children'},
    prependData = [],
    ...props
  },
) => {
  const prepend = Array.isArray(prependData) ? prependData : [prependData];
  const [data, setData] = useState(prepend);

  useEffect(() => {
    api.getMax(url, {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      beforeLoad && beforeLoad(ret);

      setData(prepend.concat(ret.data));

      afterLoad && afterLoad(ret);
    });
  }, [url]);

  return (
    <OriTreeSelect
      treeData={data}
      allowClear={allowClear}
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
  showSearch: propTypes.bool,
  treeDefaultExpandAll: propTypes.bool,
  fieldNames: propTypes.object,
};

export default TreeSelect;
