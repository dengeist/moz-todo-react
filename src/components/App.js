import React from "react";
import uuid from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Filters from "./Filters";
import FilterBtn from "./FilterBtn";

import TodoList from "./TodoList";

function createTodo(name) {
  return {
    name,
    id: uuid(),
    checked: false
  };
}

function filterTodos(todo) {
  const filterMap = {
    ALL: true,
    ACTIVE: !todo.checked,
    COMPLETED: todo.checked
  };
  const filterValue = this.state.filter;

  return filterMap[filterValue];
}

function buildTodoList(todo) {
  return (
    <Todo
      {...todo}
      key={todo.id}
      onToggleTodoComplete={this.onToggleTodoComplete}
      onDeleteTodo={this.onDeleteTodo}
      onUpdateTodoName={this.onUpdateTodoName}
    />
  );
}

const FILTER_VALUES = ["ALL", "ACTIVE", "COMPLETED"];

class App extends React.Component {
  state = {
    filter: "ALL",
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
        checked: t.id === id ? !t.checked : t.checked
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

  onSetFilter = filter => {
    this.setState({ filter: filter });
  };

  render() {
    const todoList = this.state.todos
      .filter(filterTodos, this)
      .map(buildTodoList, this);

    const filterBtns = FILTER_VALUES.map((f, i) => (
      <FilterBtn
        pressed={this.state.filter === f || undefined}
        onClick={this.onSetFilter.bind(null, f)}
        key={i}
      >
        {f}
      </FilterBtn>
    ));
    return (
      <div className="todoapp stack-large">
        <TodoForm onCreateTodo={this.onCreateTodo} ref={this.newTodoInput} />
        <Filters>{filterBtns}</Filters>
        <TodoList>{todoList}</TodoList>
      </div>
    );
  }
}

export default App;
