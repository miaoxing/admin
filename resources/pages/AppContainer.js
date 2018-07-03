import React from 'react'
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader';
import App from 'vendor/miaoxing/app/modules/app';

class AppContainer extends React.Component {
  importPage(plugin, controller, action) {
    // return import(
    //   /* webpackChunkName: "[request]" */
    //   /* webpackInclude: /resources\/pages/\/admin/ */
    //   /* webpackExclude: /loader-runner/ */
    //   `vendor/miaoxing/${plugin}/resources/pages/admin/${controller}/${action}.js`
    // );
    return import(
      /* webpackChunkName: "[request]" */
      /* webpackInclude: /resources\/pages\/admin/ */
      `vendor/miaoxing/pas/resources/pages/admin/${controller}/${action}.js`
      );
  }

  pages() {
    return require.context('vendor/miaoxing', true, /^\.\/.*\/resources\/pages\/admin\/(.+?)\/(.+?)\.js$/, 'lazy');
  }

  render() {
    return <App
      importPage={this.importPage}
      pages={this.pages()}
    />
  }
}

export default hot(module)(AppContainer);

