import React from "react";

export default function FilterBtn(props) {
  let { className, onClick, pressed } = props;

  className += " filter-btn";
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

FilterBtn.defaultProps = {
  className: "",
  onClick: () => {},
  pressed: false
};
