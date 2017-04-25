import {Menu, Icon, Form} from 'antd';
import { Link } from 'dva/router';
import React, {PropTypes} from 'react';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// function: parsing key from url for selected menu item
function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    /* eslint no-empty:0 */
  } catch (e) {}
  return key;
}

class NavHeader extends React.Component {

  // 构造函数，需要调用super方法
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }

  handleClick(e) {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  render () {
    // 如果是extends React.Component方式，需要使用bind(this)方式
    return (
      <Menu onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/"> <Icon type="mail"/> 首页 </Link>
        </Menu.Item>

        <Menu.Item key="app" disabled>
          <Link to="/"> <Icon type="appstore"/> 不可访问 </Link>
        </Menu.Item>

        <SubMenu title={<span> <Icon type="setting"/> Settings </span>}>
          <MenuItemGroup title="Setting-1">
            <Menu.Item key="setting:1"> Option 1 </Menu.Item>
            <Menu.Item key="setting:2"> Option 2 </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Setting-2">
            <Menu.Item key="setting:3"> Option 3 </Menu.Item>
            <Menu.Item key="setting:4"> Option 4 </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" ref="noopener noreferrer"> Ant Design</a>
        </Menu.Item>

      </Menu>
    );
  }

}

NavHeader.propTypes = {
};

// Both of two approaches below work well
// export default Form.create()(NavHeader);
export default NavHeader;


