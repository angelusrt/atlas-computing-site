import React from 'react';
import './App.css';
import { About } from './pages/About';
import { Intro } from './pages/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
