import React, { useState } from 'react';
import './counter.css'

function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  // Increment counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Reset counter
  const resetCounter = () => {
    setCount(0); // Set count to 0
  };

  return (
    <div className="counter">
      <h2 id="para">You have clicked {count} times</h2>
      <button id="btn" onClick={incrementCounter}>Click Me</button>
      <button id="btn" onClick={resetCounter}>Resetjh Counter</button>
    </div>
  );
}

export default Counter;
