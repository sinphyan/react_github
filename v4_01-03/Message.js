import React, { Component } from 'react';

class Message extends Component {
    state = {
        title: 'Message',
        text: 'Ｈello World ! ',
    }

    // constructor(props){
    //     super(props);
    //     this.sayHi = this.sayHi.bind(this);
    // }

    // sayHi(){
    //     this.setState  (用這樣的方法宣告的話，就要附註上面的constructor)
    // }


    sayHi = () =>{
        this.setState({
            text: 'Hi Hi Hi',
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.text}</h3>
                <button onClick={this.sayHi}>Say HI</button>
            </div>
        );
    }
}

export default Message;