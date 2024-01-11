import {useEffect, useState} from 'react';
import {Layout as AntdLayout} from 'antd';
import Sider from './Sider';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import {PageContext} from '@mxjs/a-page';
import {history, req} from '@mxjs/app';
import {useConfig} from '@miaoxing/app';
import {AuthProvider} from '@mxjs/auth';
import Navbar from './Navbar';
import getLoginPath from '../modules/get-login-path';
import { Box } from '@chakra-ui/react';

const Layout = ({children}) => {
  const [user, setUser] = useState({});
  const [menus, setMenus] = useState([]);
  const [permissions, setPermissions] = useState({});
  const {page} = useConfig();

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

    api.get('user-permissions').then(({ret}) => {
      if (ret.isSuc()) {
        setPermissions(ret.data.codes.reduce((permissions, key) => {
          permissions[key] = true;
          return permissions;
        }, {}));
      } else {
        $.ret(ret);
      }
    });
  }, []);

  return (
    <AuthProvider permissions={permissions} baseUrl={req.getBaseUrl()}>
      <PageContext.Provider value={{menus}}>
        <Box as={AntdLayout} minH="100vh">
          <Sider menus={menus}/>
          <AntdLayout>
            <Navbar user={user}/>
            <Box as={AntdLayout.Content} px={4} pt={4}>
              {children}
            </Box>
            <Box as={AntdLayout.Footer} textAlign="center">
              {page.copyright}
            </Box>
          </AntdLayout>
        </Box>
      </PageContext.Provider>
    </AuthProvider>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
