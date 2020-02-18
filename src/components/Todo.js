import React from "react";

export default class Todo extends React.Component {
  render() {
    const { id, name, checked, isEditing } = this.props;
    const uniq = "todo-" + id;
    return isEditing ? (
      <li className="todo editing">
        <div className="form-group">
          <label className="todo-label" htmlFor={uniq}>
            Rename {name}
          </label>
          <input id={uniq} className="todo-text" type="text" />
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel">
            Cancel
          </button>
          <button type="button" className="btn btn__primary todo-edit">
            Edit
          </button>
        </div>
      </li>
    ) : (
      <li className="todo">
        <div className="c-cb">
          <input
            id={uniq}
            className="todo-toggle"
            type="checkbox"
            defaultChecked={checked}
          />
          <label className="todo-label" htmlFor={uniq}>
            {name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-edit">
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
