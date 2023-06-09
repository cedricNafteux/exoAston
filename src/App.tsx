import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnMoreBar from './components/LearnMoreBar';
import NavBar from './components/NavBar';
import Summuary from './components/Summary';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="App">
      
      <LearnMoreBar />
      <NavBar />
      <Summuary />
      <Sponsors />
    </div>
  );
}

export default App;
