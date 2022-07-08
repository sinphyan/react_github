import React, { Component } from "react";

class App extends Component {
  state = {
    gender: "male",
    like: {
      male: false,
      female: false,
    },
  };
  onchangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  onChangeLike = (e) => {
    const key = e.target.value;
    this.setState((state) => ({
      like: {
        ...state.like,
        [key]: !state.like[key],
      },
    }));
  };

  render() {
    const { gender, like } = this.state;
    return (
      <div>
        <div>
          your gender:
          <input
            type="radio"
            value="male"
            onChange={this.onchangeGender}
            checked={gender === "male"}
          />
          <label>Male</label>
          <input
            type="radio"
            value="female"
            onChange={this.onchangeGender}
            checked={gender === "female"}
          />
          <label>Female</label>
        </div>
        <div>
          you like:
          <input
            type="checkbox"
            value="male"
            onChange={this.onChangeLike}
            checked={like.male}
          />
          <label>male</label>
          <input
            type="checkbox"
            value="female"
            onChange={this.onChangeLike}
            checked={like.female}
          />
          <label>female</label>
        </div>
        <pre>
            {JSON.stringify(this.state, null)}
        </pre>
      </div>
    );
  }
}

export default App;
