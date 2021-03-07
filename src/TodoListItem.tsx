import React, { ChangeEvent, useState } from "react";
import "./css/TodoListItem.css";
interface ToDoListItemProps {
  todo: Todo;
  toggoleTodo: ToggoleTodo;
  deleteTodoItem: DeleteTodoItem;
  editTodo: EditTodo;
}

// this function will view each task;
// will pass
// "todo" as an array (to view its content); and
// "toggoleTodo" as function that handles if a task was completed or not; and
// "deleteTodoItem" as function that delete the selected task; and
// "editTodo" as function that handles if a task was completed or not.
export const ToDoListItem: React.FC<ToDoListItemProps> = ({
  todo,
  toggoleTodo,
  deleteTodoItem,
  editTodo,
}) => {
  const [newTodo, setNewTodo] = useState(todo.text);

  const handleChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const handleEditSubmit = (newTodoText: Todo) => {
    editTodo(newTodo, newTodoText);
  };

  return (
    <li className="todoItem">
      <div className="toDo-text">
        <label className={todo.complete ? "complete" : undefined}>
          <input
            type="checkbox"
            className="checkmark"
            checked={todo.complete}
            onChange={() => toggoleTodo(todo)}
          />
          {todo.text}
        </label>
      </div>
      <div className="toDo-edit">
        <input
          type="text"
          value={newTodo}
          onChange={handleChangeEditInput}
        ></input>
      </div>
      <button
        type="submit"
        className="edit"
        onClick={() => handleEditSubmit(todo)}
      >
        Edit
      </button>
      <button className="delete" onClick={() => deleteTodoItem(todo)}>
        Delete
      </button>
    </li>
  );
};
