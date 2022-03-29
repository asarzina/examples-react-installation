import React, { useState } from 'react';

function Counter({ initValue = 0}) {
  const [counter, setCounter] = useState(initValue);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="center">
      <h2>{counter}</h2>
      <button onClick={decrement}>Decrement counter</button>
      <button onClick={increment}>Increment counter</button>
    </div>
  );
}

export default Counter;
