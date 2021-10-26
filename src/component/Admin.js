import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./product/Product";
// import { createBrowserHistory } from 'history';
// import MyContext from "./MyContext";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        id: "",
        name: "",
        description: "",
        price: "",
      },
      product: [],
    };
    this.idRef = React.createRef();
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.priceRef = React.createRef();
  }

  //   handleChange = (e) => {
  //     const { name, value } = e.target;

  //     this.setState((prevState) => ({
  //       post: { ...prevState.post, [name]: value},
  //     }));

  //   };

  handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: uuidv4(),
      name: this.nameRef.current.value,
      description: this.descriptionRef.current.value,
      price: this.priceRef.current.value,
    };

    this.setState(
      () => {
        return {
          product: [...this.state.product, post],
        };
      },
      () => {
        console.log(this.state.product);
        this.idRef.current.value = "";
        this.nameRef.current.value = "";
        this.descriptionRef.current.value = "";
        this.priceRef.current.value = "";
        return this.state.product;
      }
    );
  };

  deleteFunc = (id) => {
    this.setState({
      product: this.state.product.filter((del) => {
        return del.id !== id;
      }),
    });
  };

  onUpdate = (id) => {
    //   console.log(id);
    const product = this.state.product.filter((elem) => {
      return elem.id === id;
    });
    console.log("current list", product);

    this.idRef.current.uuidv4 = product[0].id;
    this.nameRef.current.value = product[0].name;
    this.descriptionRef.current.value = product[0].description;
    this.priceRef.current.value = product[0].price;
  };

  handleUpdate(e) {
    e.preventDefault();

    const newData = {
      id: this.idRef.current.uuidv4,
      name: this.nameRef.current.value,
      description: this.descriptionRef.current.value,
      price: this.priceRef.current.value,
    };

    console.log(newData);

    let arr = [...this.state.product];
    console.log("array", arr);

    // let index=arr.findIndex(elem => {
    //     return  elem.id===newData.id
    //     })
    //     console.log("index",index);

    //     if(index===-1){
    //         let temporaryarray = arr.slice();
    //         temporaryarray[index] = this.state;
    //         this.setState(temporaryarray)
    //     }else{
    //         console.log("no match");
    //     }

    // const newD = Object.assign({},this.state.product)
    // const abc = newD.filter((ele) => {return ele.id===this.idRef.current.uuidv4})

    // arr.find(obj => {
    //     return obj.id===newData.id;
    // })

    // arr.push(newData)

    this.setState(() => {
      return {
        product: this.state.product.map((ea) =>
          ea.id === newData.id ? Object.assign({}, ea, { ...newData }) : ea
        ),
      };
    });

    //    this.setState(
    //       () => {
    //         return {
    //           product: [...this.state.product,newData],

    //         };
    //       },
    //       () => {

    //         console.log(this.state.product);
    //         this.idRef.current.value="";
    //         this.nameRef.current.value = "";
    //         this.descriptionRef.current.value = "";
    //         this.priceRef.current.value = '';
    //         return this.state.product;
    //       }

    //     );


  }
 redirectToHome = () => {
      const { history } = this.props;
      if(history) history.push('/');
     }

  render() {
    return (
      <div className="App">
      <button className="logbutton" onClick={this.redirectToHome.bind(this)}>Logout</button>

        <h1>Admin</h1>
        <form>
          <input
            type="hidden"
            ref={this.idRef}
            value={this.state.post.id}
            placeholder="Product id"
          />
          <input
            name="name"
            onChange={(e) => this.setState({ post: { name: e.target.value } })}
            type="text"
            ref={this.nameRef}
            value={this.state.post.name}
            placeholder="Product name"
          />
          <input
            name="description"
            onChange={(e) =>
              this.setState({ post: { description: e.target.value } })
            }
            type="text"
            ref={this.descriptionRef}
            value={this.state.post.description}
            placeholder="Product description"
          />

          <input
            name="price"
            onChange={(e) => this.setState({ post: { price: e.target.value } })}
            type="number"
            ref={this.priceRef}
            value={this.state.post.price}
            placeholder="Product price"
          />

          {/* <input 
              type="file" 
              id="file" 
              onChange={this.handleChange} 
            />
             */}

          <button onClick={this.handleSubmit}>Submit</button>

          <button onClick={this.handleUpdate.bind(this)}>Update</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.product.map((data, id) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>
                  {/* ref={this.handleclick} */}
                  <button onClick={this.onUpdate.bind(this, data.id)}>
                    Edit
                  </button>
                  <p>       </p>

                  <button onClick={this.deleteFunc.bind(this, data.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                {/* <MyContext.Provider value={this.state.product}/> */}
               

          <Product data={this.state.product} />
      </div>
    );
  }
}

export default Admin;