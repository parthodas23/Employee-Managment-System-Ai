import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 mt-5 bg-[#1c1c1c] rounded">
      <form className="flex flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-600 mb-0.5">Task Title</h3>
            <input
              className="text-sm border-2 outline-none border-gray-600 rounded px-2 w-4/5 py-1 mb-4"
              required
              type="text"
              placeholder="Enter your task"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-0.5">Date</h3>
            <input
              className="text-sm border-2 outline-none border-gray-600 rounded px-2 w-4/5 py-1 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-0.5">Assign To</h3>
            <input
              className="text-sm border-2 outline-none border-gray-600 rounded px-2 w-4/5 py-1 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-600 mb-0.5">Catagory</h3>
            <input
              className="text-sm border-2 outline-none border-gray-600 rounded px-2 w-4/5 py-1 mb-4"
              type="text"
              placeholder="development,ui,etc..."
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-600 mb-0.5">Description</h3>
          <textarea
            className="text-sm border-2 outline-none w-full border-gray-600 h-44  rounded px-15 py-1 mb-4"
            name=""
            id=""
            cols="35"
            rows="6"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-700 px-5 w-full py-3 rounded cursor-pointer mt-3">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
