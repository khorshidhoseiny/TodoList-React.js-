import { useEffect, useRef, useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const TodoForm = ({ submitTodo, edit, addTodoHandler }) => {
  const [input, setInput] = useState(edit ? edit.text : " ");

  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const saveHandle = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter the Todo Please!!");
    } else {
      addTodoHandler(input);
      setInput("");
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={saveHandle} className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <input
            className="bg-[#212863] md:text-lg md:py-3 md:w-64 lg:w-70 text-white outline-none border-none flex justify-center items-center rounded-xl px-3 py-1.5 "
            type="text"
            onChange={changeHandler}
            value={input}
            ref={inputRef}
            placeholder={edit ? "Update Todo" : "Add Todo ..."}
          ></input>
        </div>

        <button type="submit">
          {edit ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9  relative  rounded-tr-lg md:h-12 md:w-12  stroke-[#E674F9]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 relative  rounded-tr-lg md:h-12 md:w-12 stroke-[#df6df3]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>
      </form>
    </>
  );
};

export default TodoForm;

{
  /* <Modal isOpen={modal} toggle={toggle}>
		<ModalHeader>Modal title</ModalHeader>
		<ModalBody>
			<form>
				<div>
					<label>عنوان</label>
					<input
						type="text"
						className="form-control"
						onChange={changeHandler}
						name="taskName"
					/>
				</div>
				<div>
					<label>توضیحات</label>
					<textarea
						rows={5}
						className="form-control"
						onChange={changeHandler}
						name="description"
					></textarea>
				</div>
			</form>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" onClick={saveHandle}>
				Add Todo
			</Button>
			<Button color="secondary" onClick={toggle}>
				Cancel
			</Button>
		</ModalFooter>
	</Modal> */
}
