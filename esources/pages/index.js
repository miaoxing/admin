import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import 'plugins/app/resources/modules/bootstrap-tips';
import '../modules/bootstrap-popup';
import 'plugins/app/resources/modules/loading';

import '@fortawesome/fontawesome-free/css/all.min.css'
import '../scss/index.scss';
import 'antd/dist/antd.css';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
