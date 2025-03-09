import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex mt-10 gap-5 screen">
      <div className="p-10 h-40 w-[40%] rounded-xl bg-red-400 ">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="font-medium text-3xl">New Task</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-blue-400 ">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="font-medium text-3xl">New Task</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-green-400 ">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="font-medium text-3xl">New Task</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-yellow-400 ">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="font-medium text-3xl">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
