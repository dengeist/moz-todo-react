import React from "react";

export default function FilterBtn(props) {
  let pressed = Boolean(props.pressed);
  let className = (props.className || "") + " link-btn";
  if (props.pressed) {
    className += " link-btn__active";
  }

  const stateAttrs = {
    className: className.trim(),
    "aria-pressed": pressed
  };
  return (
    <button type="button" {...stateAttrs}>
      {props.children}
    </button>
  );
}
