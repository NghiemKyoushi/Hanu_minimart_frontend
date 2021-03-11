import React from "react";
import axios from "axios";

import { Card } from "antd";
import Product from "./product";
import { ProductConsumer } from "../../contextAPI";
export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      detailProduct: null,
    };
    // this.getProduct = this.getProduct.bind(this);
    // this.getDetailProduct = this.getDetailProduct.bind(this);
  }

  getItem = (id) => {
    const product = this.state.product.find((item) => item.id === id);
    return product;
  };
  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        detailProduct: product,
      };
    });
  };

  async componentDidMount() {
    console.log("okeyyyyyy");
    const urlProduct = "http://localhost:8085/api/product/all";
    const getDataProduct = await axios.get(urlProduct);
    const product = getDataProduct.data;
    this.setState({
      product: product,
      detailProduct: product,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <Card>
      <div>
        { (product) ? (
            <div>
              {product.map(
                (product => (
                  <Card.Grid style={{ width: 340 }}>
                    <Product key={product.id} product={product} getItem={this. getItem} handleDetails= {this.handleDetails} />
                  </Card.Grid>
                ))
              )}
            </div>
          
        ) : (
          <div> ko có dữ liệu</div>
        )}
      </div>
      </Card>
    );
  }
}
