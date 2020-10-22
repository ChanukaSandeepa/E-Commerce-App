import React from 'react';
import Home from './components/Home';
import Left from './components/Left';
import Right from './components/Right';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Left />
      </div>
      <div className="app-right">
        <Right />
      </div>
    </div>
  );
}

export default App;
