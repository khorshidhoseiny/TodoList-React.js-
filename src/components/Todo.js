
const Todo = ({ todo, onDelete, onCompleted, onEdit }) => {
  return (
    <div key={todo.id} className="items-center flex justify-center">
      <div className="text-white max-w-2xl  w-full gap-x-3 items-center md:text-xl rounded-xl mx-36 mt-2 flex justify-between px-3 py-2 bg-[#212863] ">
        <div
          className={
            todo.isCompelet
              ? "opacity-50 text-white line-through "
              : "text-white  "
          }
        >
          {todo.Text}
        </div>
        <div className=" flex ">
          <button className="edit" onClick={onEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-white hover:stroke-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button className="delete" onClick={onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:stroke-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button className="completedBtn" onClick={onCompleted}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:stroke-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
