import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';

import '../modules/bootstrap';
import '../scss/index.scss';

import AppContainer from '../components/AppContainer';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
