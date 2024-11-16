import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context state
interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the context with default values
const CounterContext = createContext<CounterContextProps | undefined>(undefined);

// Custom hook to use the CounterContext
const useCounter = (): CounterContextProps => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

// CounterProvider component
const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, useCounter };
