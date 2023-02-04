import React from 'react';
import './App.css';
import { About } from './pages/About';
import { Discover } from './pages/Discover';
import { Footer } from './pages/Footer';
import { Intro } from './pages/Intro';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Discover/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
