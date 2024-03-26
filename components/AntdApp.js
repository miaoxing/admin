import { App } from 'antd';
import PropTypes from 'prop-types';

let message;
let notification;
let modal;

const ChildApp = () => {
  const app = App.useApp();
  message = app.message;
  modal = app.modal;
  notification = app.notification;
  return null;
};

const AntdApp = ({children, ...rest}) => {
  return (
    <App {...rest}>
      <ChildApp/>
      {children}
    </App>
  );
};

AntdApp.propTypes = {
  children: PropTypes.node,
};

export default AntdApp;

export { message, modal, notification };