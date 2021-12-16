import { Component } from 'react';
import {Layout} from 'antd';
import Navbar from './Navbar';
import Sider from './Sider';
import {Box} from '@mxjs/box';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import {PageContext} from '@mxjs/a-page';
import {ConfigConsumer} from 'plugins/app/components/ConfigContext';

export default class extends Component {
  state = {
    menus: [],
    pages: {},
    user: {},
  };

  static propTypes = {
    children: propTypes.node,
  };

  componentDidMount() {
    api.get('admin-page', {loading: true}).then(({ret}) => {
      if (ret.isSuc()) {
        this.setState(ret.data);
      } else {
        $.ret(ret);
      }
    });

    api.get('user').then(({ret}) => {
      if (ret.isSuc()) {
        this.setState({user: ret.data});
      } else {
        $.ret(ret);
      }
    });
  }

  render() {
    return (
      <PageContext.Provider value={{pages: this.state.pages}}>
        <Box as={Layout} minH="100vh">
          <Sider menus={this.state.menus}/>
          <Layout>
            <Navbar user={this.state.user}/>
            <Box as={Layout.Content} px4 pt4>
              {this.props.children}
            </Box>
            <Box as={Layout.Footer} textAlign="center">
              <ConfigConsumer>
                {({page}) => page.copyright}
              </ConfigConsumer>
            </Box>
          </Layout>
        </Box>
      </PageContext.Provider>
    );
  }
}
