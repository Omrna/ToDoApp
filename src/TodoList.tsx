import React from "react";
import { ToDoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggoleTodo: ToggoleTodo;
  deleteTodoItem: DeleteTodoItem;
  editTodo: EditTodo;
}

// this function will pass all the tasks to "TodoListItem" file that handles each task individually
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggoleTodo,
  deleteTodoItem,
  editTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ToDoListItem
            key={todo.text}
            todo={todo}
            toggoleTodo={toggoleTodo}
            deleteTodoItem={deleteTodoItem}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};
