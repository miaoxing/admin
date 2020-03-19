import {hot} from 'react-hot-loader/root';
import React from 'react'
import App from "plugins/app/resources/components/App";
import configs from 'data/configs/admin';
import Layout from '../layouts/Default';

configs.defaultLayout = Layout;
configs.layout = {
  '/admin/login': React.Fragment,
};

const AppContainer = () => {
  return (<App {...configs}/>);
};

export default hot(AppContainer);

