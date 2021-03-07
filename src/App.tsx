import React, { useState, Fragment } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import "./css/style.css";
import warningIcon from "./img/waning.png";
import loading from "./img/loading.svg";

const intialTodos: Array<Todo> = [];

// App represents as the main funciton
const App = () => {
  // intial states
  // --------------
  // todos of is an array of type Todo
  // errorMessage & actionMessage are empty at the begining
  const [todos, setTodo] = useState(intialTodos);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  // this function will run when user toggle a task to be completed/not-completed
  const toggoleTodo: ToggoleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    // empty the messages if its filled
    setErrorMessage("");
    setActionMessage("");
    setTodo(newTodos);
  };

  // this function will run when user delete a task
  const deleteTodoItem: ToggoleTodo = (selectedTodo) => {
    todos.forEach((todo, index) => {
      if (todo === selectedTodo) {
        // delete the specified task with resizing "todos"
        todos.splice(index, 1);
      }
    });

    setActionMessage("You have deleted the task successfully ..");
    setErrorMessage("");

    // when no tasks exist, np messages will appear
    todos.length === 0 && setActionMessage("") && setErrorMessage("");
    setTodo([...todos]);
  };

  // this function will run when user add a new task
  const addTodo: AddTodo = (newTodo) => {
    // check if the task already exist
    // if the added task no already exist, then the output will be "undefined"
    const textAlreadyExist = todos.find((e) => e.text === newTodo);

    newTodo.trim() !== "" &&
      textAlreadyExist === undefined &&
      setTodo([...todos, { text: newTodo, complete: false }]) &&
      setActionMessage("You have added the task successfully ..") &&
      setErrorMessage("");
  };

  // this function will run when user edit an existing task
  const editTodo: EditTodo = (editedTodoText, selectedTodo) => {
    // check if the task already exist
    // if the added task no already exist, then the output will be "undefined"
    const textAlreadyExist = todos.find((e) => e.text === editedTodoText);

    // this "modified" buffer check if the task have been modifyed or not
    let modified = false;
    const newTodos = todos.map((todo, index) => {
      if (
        todo === selectedTodo &&
        textAlreadyExist === undefined &&
        editedTodoText.trim() !== ""
      ) {
        modified = true;
        setActionMessage("You have edited the task successfully ..");
        setErrorMessage("");
        return {
          ...todo,
          text: editedTodoText,
        };
      }

      return todo;
    });
    if (!modified) {
      setActionMessage("");
      setErrorMessage(
        "Error !! the new content either empty or already exist !!"
      );
    }
    setTodo(newTodos);
  };

  return (
    <Fragment>
      <div className="todo-listForm">
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggoleTodo={toggoleTodo}
          deleteTodoItem={deleteTodoItem}
          editTodo={editTodo}
        />
        <div className={todos.length === 0 ? "NoTasksExists" : "TasksExists"}>
          <img src={loading} alt="errorIcon" className="errorIcon"></img>
          <p>Add your first task..</p>
        </div>
      </div>
      <div
        className={errorMessage.length >= 1 ? "error-message" : "messageHide"}
      >
        <img src={warningIcon} alt="errorIcon" className="errorIcon"></img>
        <p>{errorMessage}</p>
      </div>
      <div className={actionMessage.length >= 1 ? "message" : "messageHide"}>
        <p>{actionMessage}</p>
      </div>
    </Fragment>
  );
};

export default App;
