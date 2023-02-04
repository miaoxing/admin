import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from '@mxjs/router';
import {Box, Image} from '@mxjs/box';
import propTypes from 'prop-types';
import {withRouter} from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import $ from 'miaoxing';
import {ConfigConsumer} from 'plugins/app/components/ConfigContext';
import {matchMenus} from '@mxjs/a-page';

const {Sider} = Layout;

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
    collapsed: false,
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
    const result = matchMenus(pathname, this.props.menus);
    if (result.length >= 2) {
      this.setState({
        openKeys: this.state.collapsed ? [] : [result[0].label],
        selectedKeys: [result[1].label],
      });
    } else if (result.length === 1) {
      this.setState({
        selectedKeys: [result[0].label],
      });
    }
  }

  getItems() {
    return this.props.menus.map(menu => {
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
  }

  handleOpenChange = (openKeys) => {
    this.setState({openKeys});
  };

  handleCollapse = (collapsed) => {
    this.setState({collapsed});
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={this.state.collapsed}
        onCollapse={this.handleCollapse}
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
          items={this.getItems()}
        />}
      </Sider>
    );
  }
}

