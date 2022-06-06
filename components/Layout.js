import {useEffect, useState} from 'react';
import {Layout} from 'antd';
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

const AdminLayout = ({children}) => {
  const [user, setUser] = useState({});
  const [menus, setMenus] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // 没有 token 则提前跳转到登录页面
    if (!window.localStorage.getItem('token')) {
      history.push(getLoginPath());
      return;
    }

    api.get('admin-page', {loading: true}).then(({ret}) => {
      if (ret.isSuc()) {
        setMenus(ret.data.menus);
        setPages(ret.data.pages);
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
    <PageContext.Provider value={{pages}}>
      <Box as={Layout} minH="100vh">
        <Sider menus={menus}/>
        <Layout>
          <Navbar user={user}/>
          <Box as={Layout.Content} px4 pt4>
            {children}
          </Box>
          <Box as={Layout.Footer} textAlign="center">
            <ConfigConsumer>
              {({page}) => page.copyright}
            </ConfigConsumer>
          </Box>
        </Layout>
      </Box>
    </PageContext.Provider>
  );
};

AdminLayout.propTypes = {
  children: propTypes.node,
};
