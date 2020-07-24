import React from "react";
import app, {history} from '@weijs/app';
import http from '@miaoxing/http';
import $ from 'miaoxing';
import {Layout, Avatar, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {Link} from '@miaoxing/router';
import {Box} from 'rebass';
import {Actions} from '@miaoxing/actions';
import {floatRight} from '@miaoxing/css';
import {LockOutlined, LogoutOutlined} from '@ant-design/icons';
import propTypes from 'prop-types';

export default class extends React.Component {
  static defaultProps = {
    user: {},
  };

  static propTypes = {
    user: propTypes.object
  }

  handleLogout = async () => {
    const ret = await http.post('user/logout');
    await $.ret(ret);
    if (ret.code === 1) {
      history.push(app.url('admin/login', {next: window.location.pathname}));
    }
  }

  render() {
    const {user} = this.props;

    return (
      <Box
        as={Layout.Header}
        bg="white"
        sx={{
          boxShadow: 'sm',
          zIndex: 1,
        }}
      >
        <Dropdown
          css={floatRight()}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={app.url('admin/password')}>
                  <LockOutlined/>{' '}修改密码
                </Link>
              </Menu.Item>
              <Menu.Item>
                <a onClick={this.handleLogout}>
                  <LogoutOutlined/>{' '}退出登录
                </a>
              </Menu.Item>
            </Menu>
          }
        >
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Actions>
              <Avatar src={user.avatar}>
                {user.username ? user.username.substr(0, 1).toUpperCase() : ''}
              </Avatar>
              {user.username}
              <DownOutlined/>
            </Actions>
          </a>
        </Dropdown>
      </Box>
    );
  }
}
