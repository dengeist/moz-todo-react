import React from "react";
import NavLink from "./NavLink";

export default function Filters(props) {
  return (
    <div className="todo-filters">
      <div className="todo-filters-group">
        <NavLink to="/" className="link-btn">
          All
        </NavLink>
        <NavLink to="/active" className="link-btn">
          Active
        </NavLink>
        <NavLink to="/completed" className="link-btn">
          Completed
        </NavLink>
      </div>
    </div>
  );
}
