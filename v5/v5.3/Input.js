// 5.3 (react官方推薦)
import React, { Component, createRef } from 'react';

class Input extends Component {

    myInput = createRef();

    componentDidMount() {
       this.myInput.current.focus();
    }  

    setRef = (input) => {
        this.myInput = input;
    };

    render() {
        return (
            <div>
                <h3>Enter Your Name</h3>
                <input type ="text" ref={this.myInput}/>
            </div>
        );
    }
}

export default Input;





// 5.3 (1)
// import React, { Component } from 'react';

// class Input extends Component {

//     componentDidMount() {
//        this.myInput.focus();
//     }  

//     setRef = (input) => {
//         this.myInput = input;
//     };

//     render() {
//         return (
//             <div>
//                 <h3>Enter Your Name</h3>
//                 <input type ="text" ref={this.setRef}/>
//             </div>
//         );
//     }
// }

// export default Input;