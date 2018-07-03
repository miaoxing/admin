import React from 'react'
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader';
import App from 'vendor/miaoxing/app/modules/app';

class AppContainer extends React.Component {
  render() {
    return <App importPage={(plugin, controller, action) => {
      return import(
        /* webpackChunkName: "[request]" */
        /* webpackInclude: /resources\/pages\/admin/ */
        `vendor/miaoxing/pas/resources/pages/admin/${controller}/${action}.js`
        )
    }}/>
  }
}


//
// const app = new App({
//   importPage(plugin, controller, action) {

//     // return import(
//     //   /* webpackChunkName: "[request]" */
//     //   /* webpackInclude: /resources\/pages/\/admin/ */
//     //   /* webpackExclude: /loader-runner/ */
//     //   `vendor/miaoxing/${plugin}/resources/pages/admin/${controller}/${action}.js`
//     // );
//   },
//   pages: require.context('vendor/miaoxing', true, /^\.\/.*\/resources\/pages\/admin\/(.+?)\/(.+?)\.js$/, 'lazy')
// });


export default hot(module)(AppContainer);

