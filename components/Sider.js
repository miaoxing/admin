import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from '@mxjs/router';
import {Box, Image} from '@mxjs/box';
import propTypes from 'prop-types';
import {withRouter} from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
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
    const pathname = this.props.history.location.pathname.replace(/\/+$/, '');
    const result = this.match(pathname, this.props.menus);
    if (result) {
      this.setState({
        openKeys: [result[0].label],
        selectedKeys: [result[1].label],
      });
    }
  }

  match(pathname, menus, parents = []) {
    for (const menu of menus) {
      if (this.matchPath(pathname, menu.url)) {
        return [...parents, menu];
      }
      if (menu.children) {
        const result = this.match(pathname, menu.children, [...parents, menu]);
        if (result) {
          return result;
        }
      }
    }
    return false;
  }

  matchPath(pathname, url) {
    if (!url) {
      return false;
    }

    const fullUrl = $.url(url);

    if (fullUrl.includes('[')) {
      const regex = new RegExp(fullUrl.replace('[id]', '(.+?)'));
      return regex.test(pathname);
    }

    return fullUrl === pathname;
  }

  handleOpenChange = (openKeys) => {
    this.setState({openKeys});
  };

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
                <Image h="25px" src={page.logo}/>
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

