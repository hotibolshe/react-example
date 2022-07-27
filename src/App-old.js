import React from 'react';
import './App.css';
import Content from './components/Content';
import Router from './router'

function App() {
  return (
    <div className="App">
      <Router />
      <Content />
    </div>
  );
}

export default App;
