import React from "react";
import {Menu, Layout} from "antd";
import {Link} from "@miaoxing/router";
import logo from 'plugins/admin/resources/images/logo.png';

const {Sider} = Layout;
const {SubMenu} = Menu;

export default class extends React.Component {
  static defaultProps = {
    menus: [],
  }

  getMenuProps() {
    const pathname = window.location.pathname;
    let defaultOpenKeys = [];
    this.props.menus.map(menu => {
      menu.navs.map(menu2 => {
        if (menu2.url === pathname) {
          defaultOpenKeys.push(menu.name);
        }
      });
    });

    return {
      defaultOpenKeys: defaultOpenKeys,
      defaultSelectedKeys: [pathname],
    }
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="d-flex align-items-center justify-content-center" style={{height: 60}}>
          <img className="admin-logo" src={logo}/>
        </div>

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
                <Menu.Item key={menu2.url}>
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
