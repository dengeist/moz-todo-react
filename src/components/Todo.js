import React from "react";

export default class Todo extends React.Component {
  state = {
    isEditing: false,
    name: this.props.name
  };

  onToggleTodoEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleTodoNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todoId = e.target.dataset.todoId;
    const newName = this.state.name;

    this.props.onUpdateTodoName(todoId, newName);
    this.setState({ isEditing: false });
  };
  render() {
    const { name, isEditing } = this.state;
    const { id, checked } = this.props;
    const initialName = this.props.name;
    const uniq = "todo-" + id;
    return isEditing ? (
      <li className="todo editing">
        <form onSubmit={this.handleSubmit} data-todo-id={id}>
          <div className="form-group">
            <label className="todo-label" htmlFor={uniq}>
              Rename {initialName}
            </label>
            <input
              id={uniq}
              className="todo-text"
              type="text"
              onChange={this.handleTodoNameChange}
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn todo-cancel"
              onClick={this.onToggleTodoEditing.bind(null, id)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
            </button>
          </div>
        </form>
      </li>
    ) : (
      <li className="todo">
        <div className="c-cb">
          <input
            id={uniq}
            className="todo-toggle"
            type="checkbox"
            defaultChecked={checked}
            onChange={this.props.onToggleTodoComplete.bind(null, id)}
          />
          <label className="todo-label" htmlFor={uniq}>
            {name}
          </label>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn todo-edit"
            onClick={this.onToggleTodoEditing.bind(null, id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn__danger todo-delete"
            onClick={this.props.onDeleteTodo.bind(null, id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}
