import React, { Component } from "react";

import Page from "../Page";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Sholat Subuh"
        },
        {
          id: 1,
          text: "Sarapan"
        }
      ]
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log("todo submited", this.state.input);

    const newTodo = {
      id: this.state.todos.length,
      text: this.state.input
    };

    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      todos: newTodos
    });
  };

  render() {
    return (
        <Page>
          {/* <NavBar /> */}

          <h1>Todo React</h1>
          <form onSubmit={this.handleTodoSubmit}>
            <input
              type="text"
              onChange={this.handleTodoInput}
              placeholder="what will you do ?"
            />
            <input type="submit" value="Add Todo" />
          </form>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.id}: {todo.text}
                </li>
              );
            })}
          </ul>
        </Page>
    );
  }
}

export default Todo;
