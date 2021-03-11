import React from "react";
import "./detailProduct.css";
import Colors from "./color";
import DetailsThumb from "./DetailsThumb";
import { ExceptionMap } from "antd/lib/result";
import { render } from "react-dom/cjs/react-dom.development";
class DetailProduct extends React.Component {
  state = {
    colors: ["red", "black", "crimson", "teal"],

    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  // componentDidMount() {
  //   const { index } = this.state;
  //   this.myRef.current.children[index].className = "active";
  // }

  render() {
    const { colors } = this.state;
    const {
      id,
      name,
      
      description,
      price,
      quantity,
      
    } = this.props.product;

    return (
      <div className="details" key={id}>
        <div className="big-img">
          <img src="https://vincom.com.vn/sites/default/files/2016-10/VinMart_1.jpg" alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{name}</h2>
            <span>${price}</span>
          </div>
          <Colors colors={colors} />

          {/* <p>{company}</p> */}
          <p>{quantity}</p>

          {/* <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  /> */}
          <button
            className="cart"
            // disabled={inCart}
            // onClick={() => addToCart(id)}
          >
            {/* {inCart === true ? <span>InCart</span> :  */}
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    );
  }
}

export default DetailProduct;

// export default class  Details extends React.Component{
//   render(){
//     return (
//       <ProductConsumer>
//         {
//           (value) =>{
//             const {id, title, img, info, price, company, inCart} = value.detailProduct;
//             return(
//               <div className="container">
//               <div className ="col-10 mx-auto tex-center">
//                  <h1>Your product details</h1>
//                </div>
//                <div className='row'>
//                  <div className ='col-4 mx-auto col-md-4'>
//                  <img src ={img} className ="img-fluid"></img>
//                   </div>
//                </div>

//               </div>
//             )
//           }
//         }
//       </ProductConsumer>
//     )
//   }
// }
