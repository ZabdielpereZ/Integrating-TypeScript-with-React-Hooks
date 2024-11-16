import React from 'react';
import { useCounter } from './CounterContext';

const CounterContextComponent: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterContextComponent;
