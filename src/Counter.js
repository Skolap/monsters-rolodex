import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return (
      <>
        <button onClick={() => this.increment()}> + </button>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.decrement()}> - </button>
      </>
    );
  }
}

export default Counter;
