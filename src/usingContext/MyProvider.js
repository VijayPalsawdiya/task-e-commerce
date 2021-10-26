import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

class MyProvider extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            name: '',
            description: '',
            price: ''            
        }
    }
    
    render(){
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}