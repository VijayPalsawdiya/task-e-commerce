import React, { Component } from "react";
// import "./product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import img from '../../assets/img1.jpg';
// import { createBrowserHistory } from 'history';
import { withRouter } from "react-router";
// import MyContext from "../../usingContext/MyContext";

class Product extends Component {

  // static contextType = MyContext

  // componentDidMount() {
  //   const product = this.context
  //   console.log(product)
  // }
  
  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/');
   }

  render() {
    const { data } = this.props;

    return (
      <div>
        <button className="logbutton" onClick={this.redirectToHome.bind(this)}>Logout</button>                   
        <div class="row">

          <h1>Product</h1>

          {data?.map((obj,idx) => {
            return (
              <div key={idx} className="col-md-3 col-sm-3">
                      <Card style={{ width: '18rem' }}>
                          <Card.Body>
                              <Card.Img variant="top" src={img} />
                              <Card.Title>Product name: {obj.name}</Card.Title>
                              <Card.Title>Product Description: {obj.description}</Card.Title>
                              <Card.Title> Price : {obj.price}</Card.Title>
                              <Button >Add to cart</Button>
                          </Card.Body>
                      </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default withRouter(Product)