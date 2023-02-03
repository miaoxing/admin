import {useEffect, useState} from 'react';
import {Layout as AntdLayout} from 'antd';
import Sider from './Sider';
import {Box} from '@mxjs/box';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import {PageContext} from '@mxjs/a-page';
import {history} from '@mxjs/app';
import {ConfigConsumer} from '@miaoxing/app';
import Navbar from './Navbar';
import getLoginPath from '../modules/get-login-path';

const Layout = ({children}) => {
  const [user, setUser] = useState({});
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // 没有 token 则提前跳转到登录页面
    if (!window.localStorage.getItem('token')) {
      history.push(getLoginPath());
      return;
    }

    api.get('admin-page', {loading: true}).then(({ret}) => {
      if (ret.isSuc()) {
        setMenus(ret.data.menus);
      } else {
        $.ret(ret);
      }
    });

    api.get('user').then(({ret}) => {
      if (ret.isSuc()) {
        setUser(ret.data);
      } else {
        $.ret(ret);
      }
    });
  }, []);

  return (
    <PageContext.Provider value={{menus}}>
      <Box as={AntdLayout} minH="100vh">
        <Sider menus={menus}/>
        <AntdLayout>
          <Navbar user={user}/>
          <Box as={AntdLayout.Content} px4 pt4>
            {children}
          </Box>
          <Box as={AntdLayout.Footer} textAlign="center">
            <ConfigConsumer>
              {({page}) => page.copyright}
            </ConfigConsumer>
          </Box>
        </AntdLayout>
      </Box>
    </PageContext.Provider>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
