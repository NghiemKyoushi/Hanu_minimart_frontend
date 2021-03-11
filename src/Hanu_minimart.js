import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UnAuthenRoute from "./unAuthenRoute";

import Header from "./component/header/header.component";
import SignIn from "./component/signIn/signIn";
import SignUp from "./component/signUp/signUp.component";
import Home from "./page/homepage/homepage.page";
import TestProduct from "./page/showProduct/productList";
import DetailProduct from "./page/detailProduct/showProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./page/cart/Cart";
import AppRoute from "./component/Layout/index";
//Admin
// import AppRoute2 from "./App.Admin";
// import HeaderAdmin from "./admin/product/header/header.product";
// import ProductAdmin from "./admin/product/showProduct/productList";
// import HomeAdmin from "./admin/home.admin.js/home.admin";
// import NewProduct from "./admin/product/NewProduct/newProduct";

class Hanu_minimart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Authentication: "",
      isLoginAdmin: false,
      isLogin: false,
      uid: "",
      completed: false,
    };

    this.setStateLogin = this.setStateLogin.bind(this);
    // this.saveAuthentication = this.saveAuthentication.bind(this);
  }
  //save data token and Bearer
  // saveAuthentication(accessToken, tokenType){
  //   this.setState({
  //     Authentication: tokenType + accessToken 
  //   })
  // }
  //authentication
  setStateLogin(data, callback_function) {
    this.setState(
      {
        isLogin: data,
      },
      callback_function
    );
  }
  //product 
 

  componentDidMount() {
    //xử lí cookies
  }
  render() {
    const { isLogin, isLoginAdmin, completed } = this.state;

    return (
        <BrowserRouter>
          <Switch>
            <Route isLogin={isLogin} exact path="/">
             
              <AppRoute isLogin={isLogin}>
                <Home isLogin={isLogin} />
              </AppRoute>
            </Route>
            <UnAuthenRoute isLogin={isLogin} exact path="/signup">
              <SignUp />
            </UnAuthenRoute>
            <UnAuthenRoute isLogin={isLogin} exact path="/signin">
              <SignIn setStateLogin={this.setStateLogin} />
            </UnAuthenRoute>
            <Route isLogin={isLogin} exact path="/product">
            <AppRoute isLogin={isLogin}>
            <TestProduct/>
              </AppRoute>
            </Route>
            <Route isLogin={isLogin} exact path="/product/:id">
            <AppRoute isLogin={isLogin}>
            <DetailProduct/>
              </AppRoute>
            </Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Hanu_minimart;
