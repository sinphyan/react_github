import React, { Component } from 'react';

class Item_01 extends Component {
    render(){
        return <li>{this.props.text} ({this.props.price+1})</li>
        
        // return <li>{this.props.children}</li> 
    }
}

export default Item_01;