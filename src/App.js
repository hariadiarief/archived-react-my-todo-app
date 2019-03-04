import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" exact component={Todo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
