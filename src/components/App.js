/* eslint-disable jsx-a11y/no-redundant-roles */

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="todoapp stack-large">
        <form>
          <label for="new-todo-input" class="new-todo-label">
            What needs to be done?
          </label>
          <input
            type="text"
            id="new-todo-input"
            class="new-todo-input input__fw"
            name="text"
            autocomplete="off"
          />
          <button type="submit" class="btn btn__primary new-todo-btn">
            Add
          </button>
        </form>
        <div class="justify-between">
          <div>
            <button
              type="button"
              class="toggle-btn toggle-btn__active"
              aria-pressed="true"
            >
              all
            </button>
            <button type="button" class="toggle-btn" aria-pressed="false">
              active
            </button>
            <button type="button" class="toggle-btn" aria-pressed="false">
              completed
            </button>
          </div>
          <h2 id="list-heading" class="list-heading">
            3 tasks remaining
          </h2>
        </div>
        <ul
          role="list"
          class="todo-list stack-large"
          aria-labelledby="list-heading"
        >
          <li class="todo stack-small">
            <div class="c-cb">
              <input id="todo-0" type="checkbox" />
              <label class="todo-label" for="todo-0">
                Eat
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Eat</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
          <li class="todo stack-small">
            <div class="c-cb">
              <input id="todo-1" type="checkbox" />
              <label class="todo-label" for="todo-1">
                Sleep
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Sleep</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
          <li class="todo stack-small">
            <div class="c-cb">
              <input id="todo-2" type="checkbox" />
              <label class="todo-label" for="todo-2">
                Repeat
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Repeat</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
