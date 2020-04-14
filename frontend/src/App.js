import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Program from './Components/Program';
import About from './Components/About';
import TableTest from './Table/TableTest';
import FetchData from './Components/FetchData';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/Program" component={Program} />
      </Switch>
      <Switch>
        <Route exact path="/TableTest" component={TableTest} />
      </Switch>
      <Switch>
        <Route exact path="/About" component={About} />
      </Switch>
      <Switch>
        <Route exact path="/FetchData" component={FetchData} />
      </Switch>
    </Router>
  );
}

export default App;
