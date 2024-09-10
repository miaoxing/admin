import { RouterProvider } from 'react-router-dom';
import { wei } from '@mxjs/app';
import PropTypes from 'prop-types';
import { ConfigProvider } from '@mxjs/config';
import { useQuery } from '@mxjs/query';

const App = ({ router}) => {
  const { data: config = {page: {}} } = useQuery('js-config', {
    onSuccess: ({ data }) => {
      wei.setConfigs(data);
      document.title = data.page.title;
    }
  });

  return (
    <ConfigProvider config={config}>
      <RouterProvider router={router}/>
    </ConfigProvider>
  );
};

App.propTypes = {
  router: PropTypes.object,
};

export default App;
