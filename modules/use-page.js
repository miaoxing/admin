import { useQuery } from '@mxjs/query';

const usePage = () => {
  const { data = { menus: [] }, ...rest } = useQuery('admin-page');
  return { data, ...rest };
};

export default usePage;
