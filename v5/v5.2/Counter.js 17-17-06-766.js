import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }
    addCount = () => {
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => {
                this.sendCount()
            },
        );

        //5.2 (1) setState 可傳入 function

        // this.setState((state) => ({
        //     count: state.count + 1,
        // }));
        // this.setState((state) => ({
        //     count: state.count + 1,
        // }));
        // this.setState((state) => ({
        //     count: state.count + 1,
        // }));

    };
    //5.2 (2) setState 可傳入 callback
    sendCount = () => {
        fetch(`/api/count?value=${this.state.count}`);
    };
    render() {
        const { count, step } = this.state;
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>+1</button>

            </div>
        )
    }
}

export default Counter;