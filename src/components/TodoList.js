import React from "react";

export default function TodoList(props) {
  return (
    <>
      <h2 class="list-heading">{props.children.length} tasks remaining</h2>
      <ul className="todo-list stack-small stack-exception">
        {props.children}
      </ul>
    </>
  );
}
