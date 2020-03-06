import React from "react";

export default class FilterBtn extends React.Component {
  state = {
    pressed: Boolean(this.props.pressed)
  };

  render() {
    let pressed = this.state.pressed;

    let className = (this.props.className || "") + " link-btn";
    if (pressed) {
      className += " link-btn__active";
    }

    const stateAttrs = {
      className: className.trim(),
      "aria-pressed": pressed
    };
    return (
      <button type="button" {...stateAttrs}>
        {this.props.children}
      </button>
    );
  }
}
