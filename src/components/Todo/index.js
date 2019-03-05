import React, { Component } from "react";
import { Input, Button, Divider, Segment } from "semantic-ui-react";
import Page from "../Page";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: []
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

  removeTodo = indexToRemove => {
    const newTodos = this.state.todos.filter((todo, index) => {
      return index !== indexToRemove;
    });

    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <Page>
        <Segment>
          <h1>Todo React</h1>

          <form onSubmit={this.handleTodoSubmit}>
            <Input
              action={{
                icon: "add circle",
                size: "huge"
              }}
              value={this.state.input}
              onChange={this.handleTodoInput}
              placeholder="what will you do ?"
              fluid
            />
          </form>

          {this.state.todos.map((todo, index) => {
            return (
              <ul>
                <li key={index}>
                  {todo.text}
                  <Button
                    negative
                    type="button"
                    icon="minus square"
                    value="Remove"
                    floated="right"
                    size="tiny"
                    onClick={() => this.removeTodo(index)}
                  />
                  <Divider />
                </li>
              </ul>
            );
          })}
        </Segment>
      </Page>
    );
  }
}

export default Todo;
