import React, { Component } from "react";

class App_8 extends Component {
  state = {
    cnt: 0,
  };

  render() {
    return (
      <div>
        <p>cnt : {this.state.cnt}</p>
        <button onClick={() => this.setState({ cnt: this.state.cnt + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ cnt: this.state.cnt - 1 })}>
          -1
        </button>
      </div>
    );
  }
}

export default App_8;
