import React, { Component } from 'react'
import MyContext from './MyContext'

export default class Consumer extends Component{
    render(){
        return(
           <MyContext.Consumer>
               {(props) => {
                return <div>{props.product}</div>
                }}
           </MyContext.Consumer>
        )
    }
}