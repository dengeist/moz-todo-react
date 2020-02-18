import React from "react";

export default class TodoForm extends React.Component {
  state = {
    todoText: ""
  };

  handleChange = e => {
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoText === "") return;

    this.props.onCreateTodo(this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo-input" className="new-todo-label">
          What needs to be done?
        </label>
        <input
          type="text"
          id="new-todo-input"
          className="new-todo-input input__fw"
          name="text"
          autoComplete="off"
          value={this.state.todoText}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn__primary btn__fw">
          Add
        </button>
      </form>
    );
  }
}
