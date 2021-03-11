import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import { Card } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

import {ProductConsumer} from '../../../contextAPI';
export default class Product extends React.Component {
  
  render() {
    const { id, title, info, img, price, inCart } = this.props.product;
    return (
      <div className="card_product">
      <ProductConsumer>

        {
          (value) =>(
            <Card
            onClick={() =>{
              value.handleDetails(id)
            }
            }
            style={{ width: "18rem", heigh: "18rem", backgroundColor: "" }}
          >
            <Link to="/product/detailProduct">
              <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body>
              <Card.Title> {title}</Card.Title>
              <p className="Deal">
                description: <i className="sale">{info}</i>
              </p>
            </Card.Body>
            <Card.Footer className="footer">
              <Row>
                <Col>
                <strong className="text-muted text-right">
                    Expired Date: 08/03/2001
                  </strong>
                </Col>
                <Col>
                  <strong className="text-muted text-right">
                    Price: {price} <em>$</em>
                  </strong>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          )
        }
      </ProductConsumer>
      
      </div>
    );
  }
}
