import {Component} from 'react';
import {history} from '@mxjs/app';
import api from '@mxjs/api';
import $ from 'miaoxing';
import {Layout, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {Link} from '@mxjs/router';
import {Actions} from '@mxjs/actions';
import {LockOutlined, LogoutOutlined} from '@ant-design/icons';
import propTypes from 'prop-types';
import Avatar from './Avatar';
import {css, createStyle} from '@mxjs/css';
import {Box} from '@mxjs/box';

export default class extends Component {
  static defaultProps = {
    user: {},
  };

  static propTypes = {
    user: propTypes.object,
  };

  handleLogout = async () => {
    const {ret} = await api.post('logout');
    await $.ret(ret);
    if (ret.isSuc()) {
      window.localStorage.removeItem('token');
      history.push($.url('admin/login', {next: window.location.pathname}));
    }
  };

  render() {
    const {user} = this.props;

    return (
      <Layout.Header
        className={css('toRight', 'zIndex-1', {shadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'})}
        /* 开发时，避免 reload 之后被原有样式覆盖 */
        style={createStyle('bgWhite')}
      >
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={$.url('admin/password')}>
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
          <Box cursorPointer>
            <Actions>
              <Avatar user={user}/>
              {user.username}
              <DownOutlined/>
            </Actions>
          </Box>
        </Dropdown>
      </Layout.Header>
    );
  }
}
