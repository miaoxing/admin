import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import 'vendor/miaoxing/app/resources/modules/requirejs-custom/require';
import 'script-loader!comps/jquery-legacy/jquery.min';
import 'comps/jquery-migrate/jquery-migrate-1.2.1';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';
import 'vendor/miaoxing/app/public/js/app';
import 'vendor/miaoxing/app/public/js/tips';
import 'vendor/miaoxing/app/public/js/require-config';
import 'vendor/miaoxing/admin/public/js/require-config';
import 'vendor/miaoxing/admin/public/js/ajax-tips';
import 'vendor/miaoxing/admin/public/js/popup';
import 'vendor/miaoxing/admin/public/js/admin';

import 'font-awesome/css/font-awesome.min.css';
import '../scss/index.scss';

$.tips.defaults.valign = 'top';
$.tips.defaults.baseClass = 'badge';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
