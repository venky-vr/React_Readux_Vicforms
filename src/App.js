import React from 'react';
import './App.scss';

import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Contracts from "./components/Contracts/Contracts";
import Snippets from "./components/Snippets/Snippets"; 


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/contracts" component={Contracts} />
          <Route exact path="/snippets" component={Snippets} /> 
          <Redirect to="/"/>
        </Switch> 
    </div>
  );
}

export default App;
