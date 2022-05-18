import { useReducer } from "react";
import { createContext, useContext, useState } from "react";

// Create Context & export them
const initialState = [];

const Reducer = (state, action) => {
  switch (action.type) {
    case "filter":
      console.log(action.event.target.value);
      return state;
    

    default:
      return state;
  }
};
export const TodosContext = createContext();
export const TodosContextDispatcher = createContext();

const TodoProvier = ({ children }) => {
  const [todos, dispatch] = useReducer(Reducer,initialState);
  return (
    <>
      <TodosContext.Provider value={todos}>
        <TodosContextDispatcher.Provider value={dispatch}>
          {children}
        </TodosContextDispatcher.Provider>
      </TodosContext.Provider>
    </>
  );
};

export default TodoProvier;
export const useTodos = () => useContext(TodosContext);
export const useTodosAction = () => useContext(TodosContextDispatcher);

