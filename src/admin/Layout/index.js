import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Layout, Avatar, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import SiderMenu from "./SiderMenu";
// import Product from '../product/productList';

const { Header, Footer, Content } = Layout;

//
const AppRoute = ({ children }) => {
  return (
    //Layout  ,structure cho 1 page
    <Layout>
      <Header style={{ padding: 10 }}>
        <Avatar style={{ float: "right" }} src="./avatar.png" />
        <div className="authen">
          <Link className="signIn" to="/signin">
            SignIn
          </Link>
          <Link to="/signup">SignUp</Link>
        </div>
        <Title style={{ color: "white" }} level={3}>
          <Link to="/admin"> HANU_mimimart</Link>
        </Title>
      </Header>
      <Layout>
        <SiderMenu />
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            
            <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
              {children}
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppRoute;
