import React from "react";

const noop = () => {};

export default function FilterBtn(props) {
  let onClick = props.onClick || noop;
  let pressed = props.pressed;

  let className = (props.className || "") + " link-btn";
  if (pressed) {
    className += " link-btn__active";
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
