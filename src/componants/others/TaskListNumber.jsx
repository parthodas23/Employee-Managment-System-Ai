import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 gap-5 screen">
      <div className="p-10 h-40 w-[40%] rounded-xl bg-red-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount?.new_task}</h2>
        <h3 className="font-medium text-3xl">New Task</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-blue-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount?.active}</h2>
        <h3 className="font-medium text-3xl">Active</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-green-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount?.completed}</h2>
        <h3 className="font-medium text-3xl">Completed</h3>
      </div>
      <div className="p-10 h-40 w-[40%] rounded-xl bg-yellow-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount?.failed}</h2>
        <h3 className="font-medium text-3xl">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
