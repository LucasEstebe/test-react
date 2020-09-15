import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {TopNav} from "./layout/TopNav";
import {LeftNav} from "./layout/LeftNav";

function App() {
  return (
      <Router>
        <div className="App">
          <TopNav/>
          <div className={"row"}>
          <LeftNav/>
          <div className={"container"}>
              AppReducer.js
              GlobalState.js
          </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
