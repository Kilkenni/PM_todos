import { useState } from "react";

const EMPTY_TODO = {
  name: "",
  description: "",
}

function NewTodoForm({onSubmit}) {
  const [todo, setTodo] = useState({ ...EMPTY_TODO });

  function onInputChange(event) {
    const { name, value } = event.currentTarget;
    event.currentTarget.setCustomValidity("");
    setTodo({...todo, [name]: value });
  };

  function validateInput(event) {
    const input = event.target;
    if (input.validity.valueMissing) {
      input.setCustomValidity("This field is empty");
    }
    //const 
  }
  
  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit({...todo, isDone: false });
    setTodo({ ...EMPTY_TODO });
  };

  return (
    <form action="submit" onSubmit={onFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="name"
          required
          value={todo.name}
          onChange={onInputChange}
          onInvalid={validateInput}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          required
          value={todo.description}
          onChange={onInputChange}
          onInvalid={validateInput}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  )
}

export default NewTodoForm;