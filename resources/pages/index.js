import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

<<<<<<< ours
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
import '../modules/bootstrap-popup';
import 'vendor/miaoxing/app/resources/modules/loading';

import 'vendor/miaoxing/app/resources/modules/wei';
import 'vendor/miaoxing/app/resources/modules/require-config';
import 'vendor/miaoxing/app/resources/modules/jquery-ajax-tips';

<<<<<<< ours
import '../modules/admin';
=======
import '../modules/bootstrap';
>>>>>>> theirs

<<<<<<< ours
import 'font-awesome/css/font-awesome.min.css';
=======
import '@fortawesome/fontawesome-free/css/all.min.css'
>>>>>>> theirs
=======
import '@fortawesome/fontawesome-free/css/all.min.css';
>>>>>>> theirs
import '../scss/index.scss';
import '@miaoxing/icons';

ReactDOM.render(<AppContainer/>, document.getElementById('root'));
