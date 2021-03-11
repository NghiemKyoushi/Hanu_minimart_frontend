import React from "react";
import { Card } from "antd";
import Product from "./product";
import { ProductConsumer } from "../../../contextAPI";
import HeaderAdmin from '../header/header.product'
export default class ProductList extends React.Component {

  render() {
    return (
    //   <div className="container2">
    //     <div>
    <div>
    
    <HeaderAdmin/>
    <Card>
          <ProductConsumer>
            
              {(value) => {
                return( value.products.map((product) => {
                  return (
               
                    <Card.Grid style={{ width: 340 }}>
                      <Product key={product.id} product={product} />
                    </Card.Grid>                 

                  );
                }));
              }}
           
          </ProductConsumer>
          </Card>
         </div>
    //   </div>
    );
  }
}
