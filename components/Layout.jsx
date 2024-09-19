import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Button, Dropdown, theme } from 'antd';
import { useEffect, useState } from 'react';
import $ from 'miaoxing';
import propTypes from 'prop-types';
import { PageContext } from '@mxjs/a-page';
import { req } from '@mxjs/app';
import { AuthProvider } from '@mxjs/auth';
import getLoginPath from '../modules/get-login-path';
import { Link } from '@mxjs/router';
import SVG from 'react-inlinesvg';
import defaultAvatar from '../images/avatar.jpg';
import { useLocation } from 'react-router';
import { useQuery } from '@mxjs/query';
import { useConfig } from '@mxjs/config';
import usePage from '../modules/use-page';

const MenuLink = ({ menu }) => {
  // 快速检查是否为外部地址
  if (menu.path.indexOf('://') > 0) {
    return <a href={menu.path} target={menu.target}>{menu.name}</a>;
  } else {
    return <Link to={menu.path} target={menu.target}>{menu.name}</Link>;
  }
};

MenuLink.propTypes = {
  menu: propTypes.object,
};

const MenuIcon = ({ image }) => {
  if (!image) {
    return '';
  }

  return (
    <span className="anticon text-base">
     <SVG src={image} fill="currentColor" width="1em" height="1em" viewBox="0 0 1024 1024"/>
    </span>
  );
};

MenuIcon.propTypes = {
  image: propTypes.string,
};

/**
 * 转换后端的菜单配置为前端的菜单
 */
const convertMenus = (menus, level = 1) => {
  return menus.map(menu => {
    return {
      name: menu.label,
      // 将后端变量转换为 path-to-regexp 支持的格式，以便 ProLayout 识别到子页面
      path: menu.url ? ('/' + menu.url.replace('[id]', ':id')) : null,
      icon: menu.icon ? <MenuIcon image={menu.icon}/> : '',
      target: menu.target,
      hideInMenu: menu.isShow === false,
      // 超过只显示前两级菜单
      hideChildrenInMenu: level > 1,
      children: menu.children ? convertMenus(menu.children, level + 1) : null,
    };
  });
};

const handleLogout = async (location) => {
  await $.post('logout', { suspense: true });
  window.localStorage.removeItem('token');
  $.to(getLoginPath(null, location));
};

const renderAvatar = (dom, menus, location) => {
  const mine = menus.find(menu => menu.code === 'mine');
  let items = [];

  items = items.concat(mine?.children?.map(menu => {
    return {
      key: menu.id,
      label: (
        <Link to={menu.url}>
          {menu.icon && <MenuIcon image={menu.icon}/>}
          {' '}
          {menu.label}
        </Link>
      ),
    }
  }));

  items.push({
    key: 'logout',
    label: (
      <a onClick={handleLogout.bind(this, location)}>
        <LogoutOutlined/>{' '}退出登录
      </a>
    ),
  });

  return (
    <Dropdown menu={{ items }}>
      {dom}
    </Dropdown>
  );
};

const redirectIfNotLogin = () => {
  const location = useLocation();
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      // navigate 涉及到 state 更新，需放在 useEffect 中
      $.to(getLoginPath(null, location));
    }
  }, []);
  return !token;
};

const Layout = ({ children }) => {
  // 没有 token 则提前跳转到登录页面
  if (redirectIfNotLogin()) {
    return;
  }

  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(true);
  const { page = {} } = useConfig();

  const [routes, setRoutes] = useState([]);
  const { data: adminPage, isLoading } = usePage();
  useEffect(() => {
    if (isLoading) {
      return;
    }
    setRoutes(convertMenus(adminPage.menus));
  }, [isLoading]);
  const { data: user = {} } = useQuery('user');

  const { data: permissions = {} } = useQuery('user-permissions', {
    onSuccess: (ret) => {
      ret.data = ret.data.codes.reduce((permissions, key) => {
        permissions[key] = true;
        return permissions;
      }, {});
    }
  });

  return (
    <AuthProvider permissions={permissions} baseUrl={req.getBaseUrl()}>
      <PageContext.Provider value={adminPage}>
        <ProLayout
          token={{
            bgLayout: '#F5F7FA',
            header: {
              colorBgHeader: 'transparent',
            },
            sider: {
              colorTextMenuItemHover: token.colorPrimary,
              colorTextMenuSelected: token.colorPrimary,
            },
            pageContainer: {
              paddingBlockPageContainerContent: 12,
              paddingInlinePageContainerContent: 16,
            },
          }}
          location={location}
          layout="mix"
          title={page.title || ''}
          logo={page.logo || null}
          collapsedButtonRender={false}
          headerTitleRender={(logo, title) => {
            return (
              <div className="group flex items-center">
                {logo}
                {title}
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                  className="ml-2 opacity-0 group-hover:opacity-100"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
            );
          }}
          collapsed={collapsed}
          onCollapse={setCollapsed}
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
            src: user.avatar || defaultAvatar,
            title: user.username,
            render: (props, dom) => renderAvatar(dom, adminPage.menus, location),
          }}
          fixSiderbar={true}
          route={{
            routes,
          }}
          menu={{
            loading: isLoading,
          }}
          menuItemRender={(item, dom) => {
            return (
              <MenuLink menu={item}>{dom}</MenuLink>
            );
          }}
          menuFooterRender={({ collapsed }) => {
            if (collapsed) {
              return undefined;
            }
            return (
              <div className="text-center pt-2">{page.copyright}</div>
            );
          }}
        >
          {children}

        </ProLayout>
      </PageContext.Provider>
    </AuthProvider>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
