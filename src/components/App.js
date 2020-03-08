/* eslint-disable jsx-a11y/no-redundant-roles */

import React from "react";
import uuid from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import StatefulBtn from "./StatefulBtn";

const FILTER_VALUES = ["all", "active", "completed"];

function createTodo(name) {
  return {
    name,
    id: uuid(),
    checked: false
  };
}

function filterTodos(todo) {
  const filterMap = {
    all: true,
    active: !todo.checked,
    completed: todo.checked
  };
  const filterValue = this.state.filter;

  return filterMap[filterValue];
}

function buildTodo(todo) {
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

function buildFilterBtn(filterName, i) {
  const matchesCurrentFilter = this.state.filter === filterName;
  const key = filterName + "-" + i;
  const onClick = matchesCurrentFilter
    ? () => {}
    : this.onSetFilter.bind(null, filterName);
  const pressed = matchesCurrentFilter || undefined;

  return (
    <StatefulBtn key={key} onClick={onClick} pressed={pressed}>
      {filterName}
    </StatefulBtn>
  );
}

class App extends React.Component {
  state = {
    filter: "all",
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
    const filterBtns = FILTER_VALUES.map(buildFilterBtn, this);
    const todoList = this.state.todos
      .filter(filterTodos, this)
      .map(buildTodo, this);
    const headingText = todoList.length + " tasks remaining";

    return (
      <div className="todoapp stack-large">
        <TodoForm onCreateTodo={this.onCreateTodo} ref={this.newTodoInput} />
        <div className="flex-equidistant">
          <div>{filterBtns}</div>
          <h2 id="list-heading" class="list-heading">
            {headingText}
          </h2>
        </div>
        <ul
          role="list"
          className="todo-list stack-small stack-exception"
          aria-labelledby="list-heading"
        >
          {todoList}
        </ul>
      </div>
    );
  }
}

export default App;
