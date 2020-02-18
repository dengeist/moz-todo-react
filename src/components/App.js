import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const DATA = [
  {
    id: "001",
    name: "Apple",
    checked: false,
    isEditing: false
  },
  { id: "002", name: "Oranges", checked: false, isEditing: true }
];

function App() {
  return (
    <div className="todoapp">
      <TodoForm />
      <ul>
        {DATA.map(d => (
          <Todo {...d} key={d.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
