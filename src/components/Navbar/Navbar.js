import React from 'react';
import "./Navbar.css"
import mainLogo from "../../images/logo_Vicforms.png"
import { NavLink } from 'react-router-dom';
import {  Menu, Dropdown, Button  } from "antd"
import { DownOutlined, UserOutlined, LogoutOutlined, FileImageOutlined  } from '@ant-design/icons';


const Navbar = () => {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          <UserOutlined /> Account 
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          <FileImageOutlined/> Agency
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          <LogoutOutlined/> Sign out
        </a>
      </Menu.Item>
    </Menu>
  );
  

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink exact activeClassName="inactive" className="navbar-brand" to="/">
                <img src={mainLogo} alt="logo" width="150"/>
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link"  to="/overview">Overview <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/contracts">Contracts</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/snippets">Snippets</NavLink>
                  </li>
                </ul>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>Hi, User <DownOutlined /></Button>
             </Dropdown>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
    
  )
}
export default Navbar