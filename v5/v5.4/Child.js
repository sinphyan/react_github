import React, { Component } from "react";

class Child extends Component {
  //5.4 (ver2)
  //   state = {
  //     count: 0,
  //   };

  //   addCount = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  render() {
    const { count, addparentCount, addChildCount } = this.props;
    return (
      <div>
        <h2>Child: {count}</h2>
        <button onClick={addparentCount}>+Parent</button>
        <button onClick={addChildCount}>+Child</button>
      </div>
    );
  }
}

export default Child;
