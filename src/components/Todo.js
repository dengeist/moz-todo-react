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
    const todoId = this.props.id;
    const newName = this.state.name;

    this.props.onUpdateTodoName(todoId, newName);
    this.setState({ isEditing: false });
  };

  renameTodoInput = React.createRef();
  toggleEditBtn = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    // if we are have just clicked `edit`, focus on the text input to rename the todo
    if (!prevState.isEditing && this.state.isEditing) {
      this.renameTodoInput.current.focus();
    }
    // if we have saved or cancelled, focus back on the edit button
    if (prevState.isEditing && !this.state.isEditing) {
      this.toggleEditBtn.current.focus();
    }
  }

  render() {
    const { name, isEditing } = this.state;
    const { id, checked } = this.props;
    const initialName = this.props.name;
    const uniq = "todo-" + id;

    return isEditing ? (
      <li className="todo editing">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={uniq}>
              New name for {initialName}
            </label>
            <input
              id={uniq}
              className="todo-text"
              type="text"
              onChange={this.handleTodoNameChange}
              ref={this.renameTodoInput}
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn todo-cancel"
              onClick={this.onToggleTodoEditing.bind(null, id)}
            >
              Cancel
              <span className="visually-hidden">renaming {initialName}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">
                new name for {initialName}
              </span>
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
            ref={this.toggleEditBtn}
          >
            Edit <span className="visually-hidden">{initialName}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger todo-delete"
            onClick={this.props.onDeleteTodo.bind(null, id)}
          >
            Delete <span className="visually-hidden">{initialName}</span>
          </button>
        </div>
      </li>
    );
  }
}
