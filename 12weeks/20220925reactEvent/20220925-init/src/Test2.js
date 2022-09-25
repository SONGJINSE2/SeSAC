import React, { Component } from "react";

class exampleClass extends Component {
  printConsole1 = () => this.setState({ cnt: this.state.cnt + 5 });

  state = {
    cnt: 0,
  };

  render() {
    return (
      <div>
        <p>cnt : {this.state.cnt}</p>
        <button onClick={this.printConsole1}>버튼</button>
      </div>
    );
  }
}

export default exampleClass;
