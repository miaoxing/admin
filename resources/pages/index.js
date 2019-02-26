import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import 'vendor/miaoxing/app/resources/modules/requirejs-custom/require';
import 'script-loader!jquery';
import 'jquery-migrate';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';

import 'vendor/miaoxing/app/resources/modules/bootstrap-tips';
import 'vendor/miaoxing/app/resources/modules/bootstrap-popup';
import 'vendor/miaoxing/app/resources/modules/loading';

import 'vendor/miaoxing/app/resources/modules/wei';
import 'vendor/miaoxing/app/resources/modules/require-config';
import 'vendor/miaoxing/app/resources/modules/jquery-ajax-tips';

import '../modules/admin';

import 'font-awesome/css/font-awesome.min.css';
import '../scss/index.scss';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
