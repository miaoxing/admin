import React from 'react'
import {hot} from 'react-hot-loader';
import App from "components/App";
import pages from 'data/cache/admin-pages';

class AppContainer extends React.Component {
  importPage(plugin, controller, action) {
    console.log('dd', plugin,  controller, action);
    return pages[`/${plugin}/resources/pages/${controller}/${action}.js`]();
  }

  render() {
    return <App
      importPage={this.importPage}
      pages={pages}
    />
  }
}

export default hot(module)(AppContainer);

