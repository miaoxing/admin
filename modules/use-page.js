import { useQuery } from '@mxjs/query';

const usePage = () => {
  return useQuery('admin-page', {
    fallbackData: {
      data: {
        menus: [],
      },
    },
  });
};

export default usePage;
