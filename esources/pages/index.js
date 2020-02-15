import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import '../modules/bootstrap';

import '@fortawesome/fontawesome-free/css/all.min.css'
import '../scss/index.scss';
import 'antd/dist/antd.css';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
