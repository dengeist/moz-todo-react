import React from "react";

export default function FilterBtn(props) {
  let { className, pressed, ...rest } = props;

  className += " stateful-btn";
  if (pressed) {
    className += " stateful-btn__active";
  }

  const buttonAttrs = {
    ...rest,
    className: className.trim(),
    "aria-pressed": pressed
  };

  return (
    <button type="button" {...buttonAttrs}>
      {props.children}
    </button>
  );
}

FilterBtn.defaultProps = {
  className: "",
  onClick: () => {},
  pressed: false
};
