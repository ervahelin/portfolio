import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Nav/>
      </div>
    </Router>
  );
}

export default App;
