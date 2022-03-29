import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1});
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Incrementa contatore</button>
      </>
    );
  }
}

export default Counter;
