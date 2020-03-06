import React from "react";

const noop = () => {};

export default function FilterBtn(props) {
  let onClick = props.onClick || noop;
  let pressed = props.pressed;

  let className = (props.className || "") + " filter-btn";
  if (pressed) {
    className += " filter-btn__active";
  }

  const buttonAttrs = {
    ...props,
    className: className.trim(),
    "aria-pressed": pressed,
    onClick: onClick
  };

  return (
    <button type="button" {...buttonAttrs}>
      {props.children}
    </button>
  );
}
