import React from 'react';
import { CounterProvider } from './components/CounterContext';
import CounterContextComponent from './components/CounterContextComponent';
import CounterTester from './components/CounterTester'; 

const App: React.FC = () => {
  return (
    <CounterProvider>
      <CounterContextComponent />
      <CounterTester /> {/* Optional for separate testing */}
    </CounterProvider>
  );
};

export default App;
