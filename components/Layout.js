import React from 'react';
import {Layout} from 'antd';
import Navbar from './Navbar';
import Sider from './Sider';
import {Box} from 'rebass';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import {PageContext} from '@mxjs/a-page';

export default class extends React.Component {
  state = {
    menus: [],
    pages: {},
    user: {},
  };

  static propTypes = {
    children: propTypes.node,
  };

  componentDidMount() {
    api.get('admin-page', {loading: true}).then(ret => {
      if (ret.code === 1) {
        this.setState(ret.data);
      } else {
        $.ret(ret);
      }
    });

    api.get('user').then(ret => {
      if (ret.code === 1) {
        this.setState({user: ret.data});
      } else {
        $.ret(ret);
      }
    });
  }

  render() {
    return (
      <PageContext.Provider value={{pages: this.state.pages}}>
        <Box as={Layout} minHeight="100vh">
          <Sider menus={this.state.menus}/>
          <Layout>
            <Navbar user={this.state.user}/>
            <Box as={Layout.Content} px={4} pt={4}>
              {this.props.children}
            </Box>
            <Box as={Layout.Footer} textAlign="center">
              Miaoxing ©2020
            </Box>
          </Layout>
        </Box>
      </PageContext.Provider>
    );
  }
}
