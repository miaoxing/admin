import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import 'vendor/miaoxing/app/resources/modules/requirejs-custom/require';
import 'script-loader!jquery/dist/jquery.min';
import 'jquery-migrate/dist/jquery-migrate.min';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';
import 'vendor/miaoxing/app/resources/modules/tips';
import 'vendor/miaoxing/app/resources/modules/app';
import 'vendor/miaoxing/app/resources/modules/require-config';
import '../modules/ajax-tips';
import '../modules/popup';
import '../modules/admin';

import 'font-awesome/css/font-awesome.min.css';
import '../scss/index.scss';

$.tips.defaults.valign = 'top';
ReactDOM.render(<AppContainer/>, document.getElementById('root'));
