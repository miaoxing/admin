import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from '@mxjs/router';
import {Box, Image} from '@mxjs/box';
import propTypes from 'prop-types';
import {withRouter} from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import logo from '../images/logo.svg';
import $ from 'miaoxing';
import {ConfigConsumer} from 'plugins/app/components/ConfigContext';

const {Sider} = Layout;
const {SubMenu} = Menu;

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

export default @withRouter
class extends React.Component {
  static defaultProps = {
    menus: [],
    title: '',
    logo: '',
  };

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    menus: propTypes.array,
    title: propTypes.string,
    logo: propTypes.string,
  };

  state = {
    openKeys: [],
    selectedKeys: [],
  };

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
    let pathname = this.props.history.location.pathname.replace(/\/+$/, '');
    pathname = pathname.substring(1);

    let openKeys = this.state.openKeys;
    let selectedKeys = [];

    // 查找完全匹配的一级菜单
    for (const menu of this.props.menus) {
      if (menu.url === pathname) {
        openKeys.push(menu.label);
        selectedKeys.push(menu.label);
        break;
      }
    }

    // 查找完全匹配的二级菜单
    if (selectedKeys.length === 0) {
      this.findMenu(([menu, menu2]) => {
        if (menu2.url === pathname) {
          openKeys.push(menu.label);
          selectedKeys.push(menu2.label);
          return true;
        }
      });
    }

    // 如果没有完全匹配，查找部分匹配的二级菜单
    if (selectedKeys.length === 0) {
      this.findMenu(([menu, menu2]) => {
        if (menu2.url !== '/' && pathname.startsWith(menu2.url)) {
          openKeys.push(menu.label);
          selectedKeys.push(menu2.label);
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
  };

  findMenu(fn) {
    this.props.menus.forEach(menu => {
      menu.children.some(menu2 => fn([menu, menu2]));
    });
  }

  getUrl(url) {
    return url.indexOf('://') > 0 ? url : $.url(url);
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <ConfigConsumer>
          {({page}) => {
            return (
              <Box toCenter h="60px">
                <Image h="25px" src={page.logo || logo}/>
                <Box as="h1" ml2 mb0 textXL white>{page.title}</Box>
              </Box>
            );
          }}
        </ConfigConsumer>
        {this.props.menus.length && <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          onOpenChange={this.handleOpenChange}
        >
          {this.props.menus.map(menu => (
            menu.url ?
              <Menu.Item key={menu.label}>
                <MenuLink menu={menu}/>
              </Menu.Item>
              :
              <SubMenu
                key={menu.label}
                title={
                  <span>
                    <span>{menu.label}</span>
                  </span>
                }
              >
                {menu.children.map(menu2 => (
                  <Menu.Item key={menu2.label}>
                    <MenuLink menu={menu2}/>
                  </Menu.Item>
                ))}
              </SubMenu>
          ))}
        </Menu>}
      </Sider>
    );
  }
}

