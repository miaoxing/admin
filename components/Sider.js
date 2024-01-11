import {useEffect, useState} from 'react';
import {Menu, Layout} from 'antd';
import propTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import $ from 'miaoxing';
import {Link} from '@mxjs/router';
import {matchMenus} from '@mxjs/a-page';
import {useConfig} from '@miaoxing/app';
import { Box, Center, Image } from '@chakra-ui/react';

const MenuLink = ({menu}) => {
  // 快速检查是否为外部地址
  if (menu.url.indexOf('://') > 0) {
    return <a href={menu.url} target={menu.target}>{menu.label}</a>;
  } else {
    return <Link to={$.url(menu.url)} target={menu.target}>{menu.label}</Link>;
  }
};

MenuLink.propTypes = {
  menu: propTypes.shape({
    label: propTypes.string,
    url: propTypes.string,
    target: propTypes.string,
  }),
};

const getItems = (menus) => {
  return menus.map(menu => {
    if (false === menu.visible) {
      return;
    }

    if (menu.url) {
      return {
        key: menu.label,
        label: <MenuLink menu={menu}/>,
      };
    }

    return {
      key: menu.label,
      label: menu.label,
      children: menu.children.map(menu2 => {
        if (false !== menu2.visible) {
          return {
            key: menu2.label,
            label: <MenuLink menu={menu2}/>,
          };
        }
      }),
    };
  });
};

const Sider = ({menus = []}) => {
  const {page} = useConfig();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '');
    const result = matchMenus(pathname, menus);
    if (result.length >= 2) {
      // 小屏（如移动端）打开页面时，侧边栏是关闭状态，不用展示浮动的菜单
      setOpenKeys(collapsed ? [] : [result[0].label, ...openKeys]);
      setSelectedKeys([result[1].label]);
    } else if (result.length === 1) {
      setSelectedKeys([result[0].label]);
    }
  }, [location.pathname, menus.length]);

  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Center h="60px">
        <Image h="25px" src={page.logo}/>
        <Box as="h1" ml={2} mb={0} fontSize="xl" color="white">{page.title}</Box>
      </Center>
      {menus.length && <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={setOpenKeys}
        items={getItems(menus)}
      />}
    </Layout.Sider>
  );
};

Sider.propTypes = {
  menus: propTypes.array,
};

export default Sider;
