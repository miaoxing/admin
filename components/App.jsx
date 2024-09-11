import { RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ConfigProvider } from '@mxjs/config';
import useConfig from '../modules/use-config';

const App = ({ router }) => {
  const { config } = useConfig();

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
