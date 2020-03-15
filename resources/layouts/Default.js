import React from "react";
import {Layout} from "antd";
import Navbar from './Navbar';
import Sider from './Sider';
import $ from "miaoxing";
import app from "plugins/app/resources/modules/app";

const {Content} = Layout;

export default class extends React.Component {
  state = {
    menus: [],
    user: {},
  };

  componentDidMount() {
    $.get(app.url('admin-api/admin-page'), {loading: true})
      .then(ret => this.setState(ret));
  }

  render() {
    return <Layout style={{minHeight: '100vh'}}>
      <Sider menus={this.state.menus}/>
      <Layout>
        <Navbar user={this.state.user}/>
        <Content className="px-4 pt-4">
          {this.props.children}
        </Content>
        <footer className="text-center p-3">
          Miaoxing ©2020
        </footer>
      </Layout>
    </Layout>;
  }
}
