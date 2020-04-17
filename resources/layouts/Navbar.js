import React from "react";
import {Navbar, NavDropdown, Dropdown} from "react-bootstrap";
import app, {history} from '@miaoxing/app';
import {Avatar} from "antd";
import api from '@miaoxing/api';
import $ from 'miaoxing';

export default class extends React.Component {
  static defaultProps = {
    user: {},
  };

  state = {
    show: false,
  };

  handleOpen = () => {
    this.setState({show: true})
  }

  handleClose = () => {
    this.setState({show: false})
  }

  handleLogout = async () => {
    const ret = await api.post('user/logout');
    await $.ret(ret);
    if (ret.code === 1) {
      history.push(app.url('admin/login', {next: window.location.pathname}));
    }
  }

  render() {
    const {user} = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="shadow-sm">
        <div className="mr-auto"/>
        <Dropdown
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          show={this.state.show}
          className="nav-item"
        >
          <Dropdown.Toggle as="div" className="nav-link text-body">
            <Avatar src={user.avatar} className="mr-2"/>
            <small>{user.username}</small>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <NavDropdown.Item href={app.url('admin/password')}>
              <i className="fa fa-lock"/>
              {' '}
              修改密码
            </NavDropdown.Item>
            <NavDropdown.Item onClick={this.handleLogout}>
              <i className="fa fa-power-off"/>
              {' '}
              退出
            </NavDropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}
