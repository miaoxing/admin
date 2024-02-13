import { history } from '@mxjs/app';
import api from '@mxjs/api';
import $ from 'miaoxing';
import { Layout, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from '@mxjs/router';
import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import Avatar from './Avatar';
import { Box } from '@mxjs/a-box';
import getLoginPath from '../modules/get-login-path';

const handleLogout = async () => {
  const {ret} = await api.post('logout');
  await $.ret(ret);
  if (ret.isSuc()) {
    window.localStorage.removeItem('token');
    history.push(getLoginPath());
  }
};

const items = [
  {
    key: 1,
    label: (
      <Link to={$.url('admin/password')}>
        <LockOutlined/>{' '}修改密码
      </Link>
    ),
  },
  {
    key: 2,
    label: (
      <Link to={$.url('admin/user')}>
        <UserOutlined/>{' '}修改资料
      </Link>
    ),
  },
  {
    key: 3,
    label: (
      <a onClick={handleLogout}>
        <LogoutOutlined/>{' '}退出登录
      </a>
    ),
  },
];

const Navbar = ({user = {}}) => {
  return (
    <Box as={Layout.Header} bg="white!" display="flex" justifyContent="flex-end" shadow="sm">
      <Dropdown
        menu={{
          items,
        }}
      >
        <Box cursor="pointer" display="flex" alignItems="center" gap={1}>
          <Avatar user={user}/>
          {user.username}
          <DownOutlined/>
        </Box>
      </Dropdown>
    </Box>
  );
};

Navbar.propTypes = {
  user: propTypes.object,
};

export default Navbar;
