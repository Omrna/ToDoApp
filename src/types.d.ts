/* This file consider as a container for all types used in this project */

type Todo = {
  text: string;
  complete: boolean;
};

type ToggoleTodo = (selectedTodo: Todo) => void;

type DeleteTodoItem = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
type EditTodo = (newTodo: string, newTodoText: Todo) => void;
