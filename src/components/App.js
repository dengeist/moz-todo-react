/* eslint-disable jsx-a11y/no-redundant-roles */

import React from "react";

function App() {
  return (
    <div className="todoapp stack-large">
      <form>
        <h1>TodoMatic</h1>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          all
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          active
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          completed
        </button>
      </div>
      <h2 id="list-heading" className="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo name="Eat" completed={true} />
        <Todo name="Sleep" completed={false} />
        <Todo name="Repeat" completed={false} />
      </ul>
    </div>
  );
}

export default App;
