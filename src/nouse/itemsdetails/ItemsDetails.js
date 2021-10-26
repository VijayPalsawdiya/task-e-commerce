import React, { Component } from 'react'

export default class ItemDetails extends Component{
    constructor(props) {
        super(props)
        this.state={  
        productInfo:[]
        }        
    }

    // handleCallback = (childData) =>{
    //     this.setState({productInfo:[...this.state.product, childData]})
    //     console.log("ChildData",childData);
    // }
    
    
    render(){

    // const { parentcallback} = this.props;

        return(
            <div className="App">
            <h1>Items Details</h1>
                <h2>Items list</h2>
                 <table>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Product img</th>
                    <th>action</th>
                  </tr>
                {this.props.feilds.map((data, index) => (
                <tr key={index}>
                    <td>{data.itemName}</td>
                    <td>{data.itemDescription}</td>
                    <td>{data.itemPrice}</td>
                    <td>
                    <img src={data.imgdata} alt="product"/>
                    </td>
                    <td><button type="submit">Edit</button>
                        <button type="submit">Delete</button></td>
                </tr>

                ))}
            </table>
            </div>              

            
        )
    }
}