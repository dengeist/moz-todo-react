import React from "react";

export default function Filters(props) {
  return (
    <div className="todo-filters">
      <div className="todo-filters-group">{props.children}</div>
    </div>
  );
}
