import React from "react";
import FilterBtn from "./FilterBtn";

export default function Filters(props) {
  return (
    <div className="todo-filters">
      <div className="todo-filters-group">
        <FilterBtn className="foo">All</FilterBtn>
        <FilterBtn on={true}>Active</FilterBtn>
        <FilterBtn>Completed</FilterBtn>
      </div>
    </div>
  );
}
