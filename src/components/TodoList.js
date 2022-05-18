// import { useEffect, useRef } from "react";

import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = ({  onDelete, onCompleted, onEdit,todos }) => {
  
  const [edit, setEdit] = useState({ id: null, text: "" });

  const editTodo = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <h1 className="text-white opacity-50 text-center mt-2">Add some todos</h1>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onCompleted={() => onCompleted(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
