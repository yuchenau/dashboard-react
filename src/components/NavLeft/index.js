import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuList from './../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount() {
       const menuTreeNode = this.renderMenu(MenuList);
       this.setState({menuTreeNode});
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) =>{
            if(item.children) {
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })   
    }

    render() {
        return ( 
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {/* <SubMenu key="sub1" title={<span><MailOutlined /><span>Navigation One</span></span>}>
                        <Menu.Item key='1'>Option1</Menu.Item>
                        <Menu.Item key='2'>Option2</Menu.Item>
                        <Menu.Item key='3'>Option3</Menu.Item>
                        <Menu.Item key='4'>Option4</Menu.Item>
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
 
export default NavLeft;