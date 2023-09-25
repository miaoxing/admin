import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import api from '@mxjs/api';
import $ from 'miaoxing';
import memoizeOne from 'async-memoize-one';

async function getOption (name) {
  const {ret} = await api.get('options', {params: {id: name}});
  if (ret.isErr()) {
    $.ret(ret);
    return;
  }
  return ret.data;
}

const getOptionFromCache = memoizeOne(name => getOption(name));

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
    const data = await getOptionFromCache(name);
    if (data) {
      setValue(data);
    }
  }, [name]);

  return value;
};

export default useOption;
