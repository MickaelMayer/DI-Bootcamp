import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.counter + 1 === 5) {
        throw new Error("I crashed!");
      }
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Counter: {this.state.counter}</h2>
        <p>Click the number to increase it!</p>
      </div>
    );
  }
}

export default BuggyCounter;