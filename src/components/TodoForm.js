import React from "react";

export default function TodoForm(props) {
  return (
    <form>
      <label htmlFor="new-todo-input" className="new-todo-label">
        What needs to be done?
      </label>
      <input
        type="text"
        id="new-todo-input"
        className="new-todo-input input__fw"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__fw">
        Add
      </button>
    </form>
  );
}
