import React, { Component } from "react";

class App extends Component {
    state = {
        img: '',
    };
  onChange = (e) => {
    const file = e.target.files.item(0);
    const fr = new FileReader();
    fr.addEventListener("load", this.fileLoad);
    fr.readAsDataURL(file);
  };
  fileLoad = (e) => {
    this.setState({
        img: e.target.result,
    });
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        <img width="100%" src={this.state.img} />
        {/* <button onClick={this.submit}>submit</button>   之後研究上傳的部分submit */}
      </div>
    );
  }
}

export default App;
