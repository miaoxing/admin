import { useQuery } from '@mxjs/query';

const useConsts = (service, prefix) => {
  const result = useQuery('consts/' + service + '-' + prefix, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });
  result.consts = result.data?.items || [];
  return result;
};

export default useConsts;
