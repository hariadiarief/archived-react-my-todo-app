import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo React</h1>
          <form action="">
            <input type="text" placeholder="what will you do ?" />
            <input type="submit" value="Add Todo" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
