import React, { useState } from "react";

function Form(props) {
  const [name, updateName] = useState("AAA");

  function handleChange(e) {
    updateName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    updateName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>TodoMatic</h1>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
