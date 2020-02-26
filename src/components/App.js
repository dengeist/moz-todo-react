import React from "react";
import { LiveAnnouncer } from "react-aria-live";

import uuid from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

function createTodo(name) {
  return {
    name,
    id: uuid(),
    checked: false
  };
}

class App extends React.Component {
  state = {
    todos: this.props.todos
  };

  newTodoInput = React.createRef();

  onCreateTodo = name => {
    const newTodo = createTodo(name);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  onDeleteTodo = id => {
    this.setState(
      {
        todos: this.state.todos.filter(t => t.id !== id)
      },
      () => {
        // Move DOM focus back to the new todo form
        // after deleting
        this.newTodoInput.current.focus();
      }
    );
  };

  onToggleTodoComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => ({
        ...t,
        checked: t.id === id && !t.checked
      }))
    });
  };

  onUpdateTodoName = (id, name) => {
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === id) {
          t.name = name;
        }
        return t;
      })
    });
  };

  render() {
    return (
      <LiveAnnouncer>
        <div className="todoapp stack-large">
          <TodoForm onCreateTodo={this.onCreateTodo} ref={this.newTodoInput} />
          <div className="todo-filters">
            <h2 class="list-heading">
              {this.state.todos.length} tasks remaining
            </h2>
            <div className="todo-filters-group">
              <a href="#" className="link-btn">
                All
              </a>
              <a href="#" className="link-btn">
                Active
              </a>
              <a href="#" className="link-btn">
                Completed
              </a>
            </div>
          </div>
          <ul className="todo-list stack-small stack-exception">
            {this.state.todos.map(d => (
              <Todo
                {...d}
                key={d.id}
                onToggleTodoComplete={this.onToggleTodoComplete}
                onDeleteTodo={this.onDeleteTodo}
                onUpdateTodoName={this.onUpdateTodoName}
              />
            ))}
          </ul>
        </div>
      </LiveAnnouncer>
    );
  }
}

export default App;
