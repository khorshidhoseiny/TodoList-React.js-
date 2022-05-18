import { useEffect, useState } from "react";
import AddTodoSeaction from "./AddTodoSection";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFiltertodos] = useState([]);
  const [status, setStatus] = useState("All");

  console.log("status",status);
  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      Text: todo,
      isCompelet: false,
    };
    setTodos([...todos, newTodo]);
  };
  const SelectHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };
  const filterTodos = (status) => {
    console.log("filterFunction,status",status);
    switch (status) {
      case "Completed":
        setFiltertodos(todos.filter((todo) => todo.isCompelet));
        break;
      case "UnCompleted":
        setFiltertodos(todos.filter((todo) => !todo.isCompelet));
        break;
      default:
        setFiltertodos(todos);
    }
  };
  

  const completedTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedtodo = { ...todos[index] };
    selectedtodo.isCompelet = !selectedtodo.isCompelet;
    const updateTodos = [...todos];
    updateTodos[index] = selectedtodo;
    setTodos(updateTodos);
  };
  const removeTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodos = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.Text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  return (
    <div className="max-w-sm">
      <NavBar onSelect={SelectHandler} status={status} />
      <AddTodoSeaction
        addTodoHandler={addTodoHandler}
        UnCompletedTodos={todos.filter((t) => !t.isCompelet).length}
      />

      <TodoList
        todos={filteredTodos}
        onDelete={removeTodo}
        onCompleted={completedTodo}
        onEdit={updateTodos}
      />
    </div>
  );
};

export default TodoApp;
