import { useQuery } from '@mxjs/query';
import { wei } from '@mxjs/app';

const useConfig = () => {
  const { data: config = {}, ...rest } = useQuery('js-config', {
    onSuccess: ({ data }) => {
      wei.setConfigs(data);
      document.title = data.page.title;
    },
  });
  return { config, ...rest };
};

export default useConfig;
