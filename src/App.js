import "./App.css";
import TodoApp from "../src/components/TodoApp";
import Footer from "./components/Footer";

function App() {
  return (
    
      <section className="container max-w-sm rounded-xl shadow-xl shadow-black  bg-[#2F629E]  h-screen flex  justify-center">
        <div className="flex flex-col justify-between ">
          <TodoApp />
          <Footer />
        </div>
      </section>
    
  );
}

export default App;
