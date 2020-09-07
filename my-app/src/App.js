import React from 'react';
import logo from './logo.svg';
import './App.css';
import Front from './Front';
import Navbar from './Navbar';
import Microsoft from './Microsoft';
import Education from './Education';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Front />
        <Microsoft />
        <Education />
      </header>
    </div>
  );
}

export default App;
