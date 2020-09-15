import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {TopNav} from "./components/layout/TopNav";
import {LeftNav} from "./components/layout/LeftNav";
import {NameForm} from "./components/NameForm";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
      <GlobalProvider>
      <Router>
        <div className="App">
          <TopNav/>
          <div className={"row"}>
          <LeftNav/>
          <div className={"container"}>
            <NameForm/>
          </div>
          </div>
        </div>
      </Router>
      </GlobalProvider>
  );
}

export default App;
