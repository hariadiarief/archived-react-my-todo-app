import React, { Component } from "react";
import { Input, Table, Button } from "semantic-ui-react";
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
        <h1>Todo React</h1>

        <form onSubmit={this.handleTodoSubmit}>
          <Input
            action={{
              color: "teal",
              labelPosition: "right",
              icon: "add circle",
              size: "big",
              content: "Add Todo"
            }}
            value={this.state.input}
            onChange={this.handleTodoInput}
            placeholder="what will you do ?"
            size="huge"
            fluid
          />
        </form>
        <Table basic="very">
          <Table.Body>
            {this.state.todos.map((todo, index) => {
              return (
                <Table.Row>
                  <Table.Cell>
                    {todo.id}: {todo.text}
                  </Table.Cell>
                  <Table.Cell textAlign="right">
                    <Button
                      negative
                      type="button"
                      value="Remove"
                      onClick={() => this.removeTodo(index)}
                    >
                      Remove
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Page>
    );
  }
}

export default Todo;
