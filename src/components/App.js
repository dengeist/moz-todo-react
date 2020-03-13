/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useState } from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => <Todo {...task} key={task.id} />);

  function addTask(name) {
    alert(name);
  }

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
