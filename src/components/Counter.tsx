import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Define state for the counter with initial value 0
  const [count, setCount] = useState<number>(0);

  // Handlers for increment, decrement, and reset
  const handleIncrement = () => setCount(Count => Count + 1);
  const handleDecrement = () => setCount(Count => Count - 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
