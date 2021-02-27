import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from '@mxjs/router';
import logo from '../images/logo.png';
import {Flex, Image} from 'rebass';
import propTypes from 'prop-types';

const {Sider} = Layout;
const {SubMenu} = Menu;

export default class extends React.Component {
  static defaultProps = {
    menus: [],
  }

  static propTypes = {
    menus: propTypes.array,
  }

  getMenuProps() {
    const pathname = window.location.pathname;
    let defaultOpenKeys = [];
    let defaultSelectedKeys = [];

    // 查找完全匹配的菜单
    this.findMenu(([menu, menu2]) => {
      if (menu2.url === pathname) {
        defaultOpenKeys.push(menu.name);
        defaultSelectedKeys.push(menu2.name);
        return true;
      }
    });

    // 如果没有，查找部分匹配的菜单
    if (defaultOpenKeys.length === 0) {
      this.findMenu(([menu, menu2]) => {
        if (menu2.url !== '/' && pathname.startsWith(menu2.url)) {
          defaultOpenKeys.push(menu.name);
          defaultSelectedKeys.push(menu2.name);
          return true;
        }
      });
    }

    return {
      defaultOpenKeys: defaultOpenKeys,
      defaultSelectedKeys: defaultSelectedKeys,
    };
  }

  findMenu(fn) {
    this.props.menus.forEach(menu => {
      menu.navs.some(menu2 => fn([menu, menu2]));
    });
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Flex alignItems="center" justifyContent="center" height={60}>
          <Image height={25} src={logo}/>
        </Flex>

        {this.props.menus.length && <Menu
          theme="dark"
          mode="inline"
          {...this.getMenuProps()}
        >
          {this.props.menus.map(menu => (
            <SubMenu
              key={menu.name}
              title={
                <span>
                  <span>{menu.name}</span>
                </span>
              }
            >
              {menu.navs.map(menu2 => (
                <Menu.Item key={menu2.name}>
                  <Link to={menu2.url}>{menu2.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>}
      </Sider>
    );
  }
}
