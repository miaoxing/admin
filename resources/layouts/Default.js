import React from "react";
import {Layout} from "antd";
import Navbar from './Navbar';
import Sider from './Sider';
import {Box} from 'rebass';
import api from '@miaoxing/api';
import $ from 'miaoxing';

export default class extends React.Component {
  state = {
    menus: [],
    user: {},
  };

  componentDidMount() {
    api.get('admin-page', {loading: true}).then(ret => {
      this.setState(ret);
      if (ret.code !== 1) {
        $.ret(ret);
      }
    })
  }

  render() {
    return <Layout style={{minHeight: '100vh'}}>
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
    </Layout>;
  }
}
