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
          class="todo-list stack-small stack-exception"
          aria-labelledby="list-heading"
        >
          <li class="todo">
            <div class="c-cb">
              <input id="todo-0" type="checkbox" />
              <label class="todo-label" for="todo-0">
                Apples
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Apples</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Apples</span>
              </button>
            </div>
          </li>
          <li class="todo">
            <div class="c-cb">
              <input id="todo-1" type="checkbox" />
              <label class="todo-label" for="todo-1">
                Oranges
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Oranges</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Oranges</span>
              </button>
            </div>
          </li>
          <li class="todo">
            <div class="c-cb">
              <input id="todo-2" type="checkbox" />
              <label class="todo-label" for="todo-2">
                Tangerines
              </label>
            </div>
            <div class="btn-group">
              <button type="button" class="btn todo-edit">
                Edit <span class="visually-hidden">Tangerines</span>
              </button>
              <button type="button" class="btn btn__danger todo-delete">
                Delete <span class="visually-hidden">Tangerines</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
