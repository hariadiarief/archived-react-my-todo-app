import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./components/Home";
import Todo from "./components/Todo";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
