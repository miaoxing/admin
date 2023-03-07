import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import api from '@mxjs/api';
import $ from 'miaoxing';

/**
 * @experimental
 */
const useOption = (name, defaults) => {
  if (typeof name !== 'string') {
    defaults = name;
    name = Object.keys(name).join(',');
  }

  const [value, setValue] = useState(defaults);
  useAsyncEffect(async () => {
    const {ret} = await api.get('options', {params: {id: name}});
    if (ret.isErr()) {
      $.ret(ret);
      return;
    }
    setValue(ret.data);
  }, [name]);

  return value;
};

export default useOption;
