import React from "react";

export default function ToggleBtn(props) {
  let { className, pressed, ...rest } = props;

  className += " toggle-btn";
  if (pressed) {
    className += " toggle-btn__active";
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

ToggleBtn.defaultProps = {
  className: "",
  onClick: () => {},
  pressed: false
};
