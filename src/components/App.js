import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import uuid from "uuid";

const DATA = [
  {
    id: "001",
    name: "Apple",
    checked: false,
    isEditing: false
  },
  { id: "002", name: "Oranges", checked: false, isEditing: false }
];

function createTodo(name) {
  return {
    name,
    id: uuid(),
    checked: false,
    isEditing: false
  };
}

class App extends React.Component {
  state = {
    todos: DATA.map(d => ({
      ...d,
      isEditing: d.isEditing === undefined ? false : d.isEditing
    }))
  };
  onCreateTodo = name => {
    const newTodo = createTodo(name);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  onDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  onToggleTodoComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => ({
        ...t,
        checked: t.id === id && !t.checked
      }))
    });
  };
  onToggleTodoEditing = id => {
    this.setState({
      todos: this.state.todos.map(t => ({
        ...t,
        isEditing: t.id === id && !t.isEditing
      }))
    });
  };
  render() {
    return (
      <div className="todoapp">
        <TodoForm onCreateTodo={this.onCreateTodo} />
        <ul>
          {this.state.todos.map(d => (
            <Todo
              {...d}
              key={d.id}
              onToggleTodoComplete={this.onToggleTodoComplete}
              onToggleTodoEditing={this.onToggleTodoEditing}
              onDeleteTodo={this.onDeleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
