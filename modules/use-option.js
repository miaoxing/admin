import { useQuery } from '@mxjs/query';
import appendUrl from 'append-url';

/**
 * @experimental
 */
const useOption = (name, defaults) => {
  if (typeof name !== 'string') {
    defaults = name;
    name = Object.keys(name).join(',');
  }

  const { data = defaults } = useQuery(appendUrl('options', { id: name }));
  return data;
};

export default useOption;
