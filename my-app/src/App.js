import React from 'react';
import logo from './logo.svg';
import './App.css';
import Front from './Front';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Front />
        <Experience />
        <Education />
        <Projects />
      </header>
    </div>
  );
}

export default App;
