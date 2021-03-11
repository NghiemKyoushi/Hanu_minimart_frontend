import React from "react";
import axios from "axios";
import './product.css'
import { Card } from "antd";
import Product from "./product";
import {Button} from "react-bootstrap";
import { ReloadOutlined } from "@ant-design/icons";

import { ProductConsumer } from "../../contextAPI";
import { withRouter } from "react-router";
 class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      detailProduct: null,
      steps: 6,
    };
    // this.getProduct = this.getProduct.bind(this);
    // this.getDetailProduct = this.getDetailProduct.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
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

  handleLoadMore() {
    const { product, steps } = this.state;
    if (steps + 6 < product.length) {
      this.setState({
        steps: steps + 6,
      });
    } else {
      this.setState({
        steps: product.length,
      });
    }
  }

  render() {
    const { product, steps } = this.state;
    return (
      
        <div>
          {product && product.length > 0 ? (
            <div className ="content_Cart">
            <Card>
              {product.map((product, index) => {
                if (index < steps) {
                  return (
                    <div>
                      <Card.Grid style={{ width: 340 }}>
                        <Product
                          key={product.id}
                          product={product}
                          getItem={this.getItem}
                          handleDetails={this.handleDetails}
                        />
                      </Card.Grid>
                    </div>
                  );
                }
              })}
              </Card>

              <div className="load-more-div">
              <Button
                    variant="success"
                    size="sm"
                    onClick={this.handleLoadMore}
                    >
                        <ReloadOutlined />
                        Load more
                  
                  </Button>
                    </div>
            </div>
          ) : (
            <div> ko có dữ liệu</div>
          )}
        </div>
    );
  }
}
export default withRouter(ProductList);


