// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Polls from './components/Polls';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/polls">Polls</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/results" element={<div>Results Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

