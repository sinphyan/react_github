import React, { Component } from 'react';


class Counter extends Component {

    // v5.1 (第一重點)
    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount,
        };
    }
    state = {
        count: 0,
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
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

// v5.1 (第二重點)
// >>>> defaultProps 指定預設prose：

// class Counter extends Component {

//     static defaultProps = {
//         initCount: 0,
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             count: props.initCount,
//         };
//     }
//     state = {
//         count: 0,
//     }
//     addCount = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }
//     render() {
//         const {count, step}=this.state;
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.addCount}>+1</button>

//             </div>
//         )
//     }
// }

// 假設不要預設上方的 static defaultProps = { initCount: 0, }
// >>>
// Counter.defaultProps = {
//     initCount: 0,
// };

// export default Counter;







// v5.1 (第三重點)
// >>>> 用propTypes 檢查 props 類型：

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Counter extends Component {

//     // 1.假設不要預設下方的 Counter.PropTypes = {initCount: PropTypes.number,};
//     // >>>
//     // static PropTypes = {
//     //     initCount: PropTypes.number,
//     // }

//     constructor(props) {
//         super(props);
//         this.state = {
//             count: props.initCount,
//         };
//     }
//     state = {
//         count: 0,
//     }
//     addCount = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }
//     render() {
//         const { count, step } = this.state;
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.addCount}>+1</button>

//             </div>
//         )
//     }
// }

// Counter.defaultProps = {
//     initCount: 0,
// };

// Counter.PropTypes = {
//     initCount: PropTypes.number,
// };

// export default Counter;