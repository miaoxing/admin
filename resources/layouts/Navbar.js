import React from "react";
import {Navbar, NavDropdown, Dropdown} from "react-bootstrap";
import app from '@miaoxing/app';
import {Avatar} from "antd";

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
            <NavDropdown.Item href={app.url('users/logout')}>
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
