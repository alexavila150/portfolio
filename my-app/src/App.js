import React from 'react';
import './App.css';
import Front from './Front';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Front />
        <Experience />
        <Education />
        <Projects />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
