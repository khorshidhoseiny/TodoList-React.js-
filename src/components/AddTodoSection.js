import TodoForm from "./TodoForm";

const AddTodoSeaction = ({ addTodoHandler,UnCompletedTodos }) => {
  
  return (
    <section className="mb-8 ">
      <h1 className="text-white flex justify-center md:text-3xl body-font font-Nunito font-semibold text-2xl mb-5">
          Hey Sun <img className="w-8 h-8 flex justify-center items-center mt-1 mr-2" src={process.env.PUBLIC_URL + `/icon/hand.png`} /> What's up?
        </h1>
      <div className="flex flex-col justify-center items-center mt-8 ">
        
        <div className="flex justify-center items-center">
          <TodoForm addTodoHandler={addTodoHandler} />
        </div>
        <div>{UnCompletedTodos? <p className="text-white  text-center mt-2">you have<span className="text-pink-400 font-bold "> {UnCompletedTodos} </span> unCompleted todos</p>: ""}</div>
      </div>
    </section>
  );
};

export default AddTodoSeaction;
