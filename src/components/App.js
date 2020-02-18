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
  { id: "002", name: "Oranges", checked: false, isEditing: true }
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
  handleCreateTodo = name => {
    const newTodo = createTodo(name);
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };
  render() {
    return (
      <div className="todoapp">
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <ul>
          {this.state.todos.map(d => (
            <Todo {...d} key={d.id} onDeleteTodo={this.handleDeleteTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
