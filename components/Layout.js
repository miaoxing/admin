import { LockOutlined, LogoutOutlined, UserOutlined, } from '@ant-design/icons';
import { ProLayout, } from '@ant-design/pro-components';
import { Dropdown, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import api from '@mxjs/api';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import { PageContext } from '@mxjs/a-page';
import { history, req } from '@mxjs/app';
import { useConfig } from '@miaoxing/app';
import { AuthProvider } from '@mxjs/auth';
import getLoginPath from '../modules/get-login-path';
import { Box } from '@mxjs/a-box';
import { Link } from "@mxjs/router";

const handleLogout = async () => {
  const {ret} = await api.post('logout');
  await $.ret(ret);
  if (ret.isSuc()) {
    window.localStorage.removeItem('token');
    history.push(getLoginPath());
  }
};

const MenuLink = ({menu}) => {
  // 快速检查是否为外部地址
  if (menu.path.indexOf('://') > 0) {
    return <a href={menu.path} target={menu.target}>{menu.name}</a>;
  } else {
    return <Link to={menu.path} target={menu.target}>{menu.name}</Link>;
  }
};

const Layout = ({children}) => {
  const {token} = theme.useToken();
  const [routes, setRoutes] = useState([]);
  const [user, setUser] = useState({});
  const [permissions, setPermissions] = useState({});
  const {page} = useConfig();
  const [adminPage, setAdminPage] = useState({
    menus: [],
  });

  useEffect(() => {
    // 没有 token 则提前跳转到登录页面
    if (!window.localStorage.getItem('token')) {
      history.push(getLoginPath());
      return;
    }

    api.get('admin-page', {loading: true}).then(({ret}) => {
      if (ret.isErr()) {
        $.ret(ret);
        return;
      }

      setAdminPage(ret.data);
      const routes = ret.data.menus.map((menu) => {
        return {
          name: menu.label,
          path: menu.url,
          target: menu.target,
          hideInMenu: menu.visible === false,
          children: menu.children.map((item) => {
            return {
              name: item.label,
              path: item.url,
              target: menu.target,
            };
          }),
        }
      });
      setRoutes(routes);
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
    <Box
      sx={{
        '.ant-pro-layout .ant-layout-header.ant-pro-layout-header': {
          borderBlockEndColor: 'transparent',
        },
        '.ant-pro .ant-pro-layout .ant-pro-sider .ant-layout-sider-children': {
          borderInlineEndColor: 'transparent',
        },
        '.ant-menu .ant-menu-submenu-title .anticon': {
          width: 'auto',
          fontSize: '20px',
        }
      }}
    >
      <AuthProvider permissions={permissions} baseUrl={req.getBaseUrl()}>
        <PageContext.Provider value={adminPage}>
          <ProLayout
            token={{
              header: {
                colorBgHeader: 'transparent',
              },
              sider: {
                colorTextMenuItemHover: token.colorPrimary,
              colorTextMenuSelected: token.colorPrimary
            },
            }}
            layout="mix"
            title={page.title || ''}
            logo={page.logo || null}
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            avatarProps={{
              src: user.avatar,
              title: user.username,
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
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
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            route={{
              path: '',
              routes: routes,
            }}
            fixSiderbar={true}
            collapsedButtonRender={false}
            menuItemRender={(item, dom) => {
              return (
                <MenuLink menu={item}>{dom}</MenuLink>
              );
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) {
                return undefined;
              }
              return (
                <Box textAlign="center" pt={2}>{page.copyright}</Box>
              );
            }}
          >
            {children}

          </ProLayout>
        </PageContext.Provider>
      </AuthProvider>
    </Box>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
