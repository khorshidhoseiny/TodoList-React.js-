import React from "react";

const NavBar = ({ status, onSelect }) => {
  return (
    <div className="flex  justify-center items-center ">
      <nav className=" flex justify-between gap-x-14  mb-5  px-4 mx-5  ">
        <div className="flex flex-col w-36 mt-2 ml-5  justify-center items-center">
          <img
            className="w-20 md:w-24 flex justify-center items-center  "
            src={process.env.PUBLIC_URL + `/Img/profile.png`}
          />
          <label className="text-sm w-full  md:w-36 text-center  text-white">
            sun
          </label>
        </div>
        <ul className="flex right-2 -top-3 gap-x-1 ">
          <li className="cursor-pointer relative flex justify-center items-center gap-x-0.5 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7  opacity-70  stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <select
              value={status}
              onChange={onSelect}
              className={
                "outline-none text-sm flex gap-0 bg-opacity-40 py-1 bg-[#212863] top-20 text-white rounded-md right-2 max-w-24 h-22"
              }
            >
              <option
                value="All"
                className=" border-b  border-b-slate-500 py-1 hover:bg-slate-400 text-[#212863] hover:text-white px-2 rounded-t-lg "
              >
                All
              </option>
              <option
                value="Completed"
                className="  border-b border-b-slate-500 py-1 hover:bg-slate-400 text-[#212863] hover:text-white px-2 "
              >
                Completed
              </option>
              <option
                value="UnCompleted"
                className="   py-1 hover:bg-slate-400 hover:text-white px-2 text-[#212863] rounded-b-lg "
              >
                unCompleted
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
