import React, { useDebugValue } from 'react';


import {
  UserOutlined,
  FolderOutlined,
  ContainerOutlined
  } from "@ant-design/icons";
  
  import { Layout, Menu, Input } from "antd";
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// import {ProductConsumer, ProductProvider} from '../../contextAPI';

  
  // import Product from '../product/productList';
  
  const {  Sider } = Layout;

const SiderMenu = () => {
    return(
        <Sider>
              <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
                <Menu.Item key="dashboard">Admin</Menu.Item>
               <Menu.Item>
               <UserOutlined />Manage User
               </Menu.Item>
               <Menu.Item>
               <FolderOutlined />
               <Link to ="/admin/product">Manage Product </Link> 
               </Menu.Item>
               <Menu.Item>
               <ContainerOutlined />  Manage Order
               </Menu.Item>
              </Menu>
              
            </Sider>
     );
}

export default SiderMenu;