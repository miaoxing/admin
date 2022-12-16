import {useEffect, useState} from 'react';
import api from '@mxjs/api';
import {Select as OriSelect} from '@mxjs/a-form';
import propTypes from 'prop-types';
import $ from 'miaoxing';

const Select = ({url, afterLoad, ...props}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api.getMax(url, {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      setOptions(ret.data);
      afterLoad && afterLoad(ret);
    });
  }, []);

  return (<OriSelect options={options} {...props}/>);
};

Select.propTypes = {
  url: propTypes.string,
  afterLoad: propTypes.func,
};

export default Select;
