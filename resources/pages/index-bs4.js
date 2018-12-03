import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainerBs4 from './AppContainerBs4';
// @deprecated 兼容v1版的后台布局
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import '../scss/bs4/admin.scss';

ReactDOM.render(<AppContainerBs4/>, document.getElementById('root'));
