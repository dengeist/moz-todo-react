import React from "react";
import { LiveMessage } from "react-aria-live";

class TodoForm extends React.Component {
  state = {
    todoText: "",
    errorMsg: ""
  };

  handleChange = e => {
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoText === "") {
      this.setState({ errorMsg: "Your tasks cannot be blank." });
      return;
    }

    this.props.onCreateTodo(this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <>
        <LiveMessage message={this.state.errorMsg} aria-live="polite" />
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
            ref={this.props.newTodoInput}
          />
          <button type="submit" className="btn btn__primary new-todo-btn">
            Add
          </button>
        </form>
      </>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <TodoForm newTodoInput={ref} {...props} />
));
