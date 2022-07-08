import React, { Component } from "react";
class App extends Component {
  state = {
    count: 0,
  };
  onChange = (e) => {
    this.setState({
      count: parseInt(e.target.value, 10),　    
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <input   // innput 永遠是value:字串 所以要作轉換：parseInt(e.target.value, 10),　
        type="number" 
        value={count} 
        onChange={this.onChange} 
        />
        <h2>next:{count + 1}</h2>
      </div>
    );
  }
}

export default App;
