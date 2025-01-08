import { useQuery } from '@mxjs/query';

const useUser = () => {
  const { data: user = {}, ...rest } = useQuery('user');
  return { user, ...rest };
};

export default useUser;
