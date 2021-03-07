import React, { ChangeEvent, FormEvent, useState } from "react";
import "./css/TodoList.css";

interface AddTodoProps {
  addTodo: AddTodo;
}

// this function responsible for adding new task
export const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
  };
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a Task"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          +
        </button>
      </div>
    </form>
  );
};
