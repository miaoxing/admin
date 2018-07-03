import React from 'react'
import {hot} from 'react-hot-loader';
import App from 'vendor/miaoxing/app/modules/app';

// NOTE: react-hot-reload和ReactDom.render需在不同的文件中
class AppContainer extends React.Component {
  // WARNING: import需早于require.context,才能提前解析出webpackChunkName,否则webpackChunkName无效
  importPage(plugin, controller, action) {
    return import(
      /* webpackChunkName: "[request]" */
      /* webpackInclude: /resources\/pages\/admin/ */
      `vendor/miaoxing/${plugin}/resources/pages/admin/${controller}/${action}.js`
      );
  }

  getPages() {
    return require.context('vendor/miaoxing', true, /^\.\/.*\/resources\/pages\/admin\/(.+?)\/(.+?)\.js$/, 'lazy');
  }

  render() {
    return <App
      importPage={this.importPage}
      pages={this.getPages()}
    />
  }
}

export default hot(module)(AppContainer);

