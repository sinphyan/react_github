import React, { Component } from "react";
class App extends Component {
  state = {
    text: "abc",
  };
  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <textarea type="text" value={text} onChange={this.onChange} />

        {/*單行表單: input textarea: 多行表單*/}
        {/* <input type="text" value={text} onChange={this.onChange} />　 */}
        <h2>{text}</h2>
      </div>
    );
  }
}

export default App;
