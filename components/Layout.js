import React from 'react';
import {Layout} from 'antd';
import Navbar from './Navbar';
import Sider from './Sider';
import {Box} from 'rebass';
import http from '@mxjs/http';
import $ from 'miaoxing';
import propTypes from 'prop-types';

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
    http.get('admin-page', {loading: true}).then(ret => {
      if (ret.code === 1) {
        // @internal TODO Provider
        miaoxing.pages = ret.data.pages;
        this.setState(ret.data);
      } else {
        $.ret(ret);
      }
    });

    http.get('user').then(ret => {
      if (ret.code === 1) {
        this.setState({user: ret.data});
      } else {
        $.ret(ret);
      }
    });
  }

  render() {
    return <Box as={Layout} minHeight="100vh">
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
    </Box>;
  }
}
