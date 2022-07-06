import React, { Component } from "react";
import ghoust from "./ghoust.jpg";
import "./style.css";

class Demo extends Component {
  state = {
    visible: true,
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { visible } = this.state;
    {
        /* 寫法6 */
    }
      
    // const cn = `image ${visible ? "" : "hide"}`;
    {
      /* 寫法5 */
    }
    // const cn = visible ? 'image' : 'image hide';
    {
      /* 寫法3 */
    }
    // const styleobj = { display: visible ? 'block' : 'none' };
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <hr />
        {/* 寫法1 */}
        {/* {visible ? <img src={ghoust} /> : null} */}
        {/* 寫法2 */}
        {/* {visible && <img src={ghoust} /> } */}
        {/* 只有在true 才會有上面的寫法三元判斷式 */}
        {/* 寫法3 */}
        {/* <img style={styleobj} src={ghoust} /> */}
        {/* 寫法4 */}
        {/* <img className="image hide" src={ghoust} /> */}
        {/* 寫法5 */}
        {/* <img className={cn} src={ghoust} /> */}
        {/* 寫法7 */}
        <img className={`image ${visible ? "" : "hide"}`} src={ghoust} />
      </div>
    );
  }
}

export default Demo;
