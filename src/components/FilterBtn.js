import React from "react";

const noop = () => {};

export default class FilterBtn extends React.Component {
  state = {
    on: Boolean(this.props.on)
  };

  press = this.props.onPress || noop;

  render() {
    let on = this.state.on;

    let className = (this.props.className || "") + " link-btn";
    if (on) {
      className += " link-btn__active";
    }

    const buttonAttrs = {
      ...this.props,
      className: className.trim(),
      "aria-pressed": on,
      onClick: this.press
    };
    return (
      <button type="button" {...buttonAttrs}>
        {this.props.children}
      </button>
    );
  }
}
