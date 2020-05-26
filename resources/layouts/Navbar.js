import React from "react";
import app, {history} from '@miaoxing/app';
import api from '@miaoxing/api';
import $ from 'miaoxing';
import {Layout, Avatar, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {Link} from '@miaoxing/router';
import {Box} from 'rebass';
import {Actions} from '@miaoxing/actions';
import {css} from 'emotion';

export default class extends React.Component {
  static defaultProps = {
    user: {},
  };

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
      <Box
        as={Layout.Header}
        bg="white"
        sx={{
          boxShadow: 'sm',
          zIndex: 1,
        }}
      >
        <Dropdown
          className={css({float: 'right'})}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={app.url('admin/password')}>
                  <i className="fa fa-lock"/>{' '}修改密码
                </Link>
              </Menu.Item>
              <Menu.Item>
                <a onClick={this.handleLogout}>
                  <i className="fa fa-power-off"/>{' '}退出
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
