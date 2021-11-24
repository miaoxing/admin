import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from '@mxjs/router';
import {Box, Image} from '@mxjs/box';
import propTypes from 'prop-types';
import {withRouter} from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import logo from '../images/logo.svg';

const {Sider} = Layout;
const {SubMenu} = Menu;

export default @withRouter
class extends React.Component {
  static defaultProps = {
    menus: [],
    title: '',
    logo: '',
  }

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    menus: propTypes.array,
    title: propTypes.string,
    logo: propTypes.string,
  }

  state = {
    openKeys: [],
    selectedKeys: [],
  }

  componentDidMount() {
    this.updateMenu();
    this.props.history.listen(() => {
      this.updateMenu();
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.menus !== this.props.menus) {
      this.updateMenu();
    }
  }

  updateMenu() {
    const pathname = window.location.pathname;
    let openKeys = this.state.openKeys;
    let selectedKeys = [];

    // 查找完全匹配的菜单
    this.findMenu(([menu, menu2]) => {
      if (menu2.url === pathname) {
        openKeys.push(menu.name);
        selectedKeys.push(menu2.name);
        return true;
      }
    });

    // 如果没有完全匹配，查找部分匹配的菜单
    if (selectedKeys.length === 0) {
      this.findMenu(([menu, menu2]) => {
        if (menu2.url !== '/' && pathname.startsWith(menu2.url)) {
          openKeys.push(menu.name);
          selectedKeys.push(menu2.name);
          return true;
        }
      });
    }

    // Unique
    openKeys = [...new Set(openKeys)];

    this.setState({openKeys, selectedKeys});
  }

  handleOpenChange = (openKeys) => {
    this.setState({openKeys});
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
        {this.props.title && <Box toCenter h="60px">
          <Image h="25px" src={this.props.logo || logo}/>
          <Box as="h1" ml2 mb0 textXL white>{this.props.title}</Box>
        </Box>}

        {this.props.menus.length && <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          onOpenChange={this.handleOpenChange}
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
