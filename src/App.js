import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {TopNav} from "./layout/TopNav";

function App() {
  return (
      <Router>
        <div className="App">
          <TopNav/>
        </div>
      </Router>
  );
}

export default App;
