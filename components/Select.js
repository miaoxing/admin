import {useEffect, useState} from 'react';
import api from '@mxjs/api';
import {Select as OriSelect} from '@mxjs/a-form';
import propTypes from 'prop-types';
import $ from 'miaoxing';

const Select = ({url, afterLoad, optionsKeys = [['data', 'items'], 'data'], ...props}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api.getMax(url, {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      for (const key of optionsKeys) {
        if (Array.isArray(key) && ret[key[0]]) {
          setOptions(ret[key[0]][key[1]]);
          break;
        }

        if (ret[key]) {
          setOptions(ret[key]);
        }
      }

      afterLoad && afterLoad(ret);
    });
  }, []);

  return (<OriSelect options={options} {...props}/>);
};

Select.propTypes = {
  url: propTypes.string,
  afterLoad: propTypes.func,
  optionsKeys: propTypes.array,
};

export default Select;
