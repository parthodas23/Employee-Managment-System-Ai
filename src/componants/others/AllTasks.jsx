import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const data = useContext(AuthContext);

  return (
    <div className="bg-gray-900 p-5 mt-5 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="bg-gray-800 text-white mb-3 px-4 py-2 flex justify-between rounded-md">
        <h2 className="w-1/5 font-semibold text-center">Employee Name</h2>
        <h3 className="w-1/5 font-semibold text-center">New Task</h3>
        <h3 className="w-1/5 font-semibold text-center">Active Task</h3>
        <h3 className="w-1/5 font-semibold text-center">Completed</h3>
        <h3 className="w-1/5 font-semibold text-center">Failed</h3>
      </div>

      {/* Employee Data Section */}
      <div className="h-[75%] overflow-y-auto space-y-2">
        {data.employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-gray-800 text-white px-4 py-2 flex justify-between rounded-md shadow-sm"
          >
            <h2 className="w-1/5 text-purple-400 text-center font-medium">
              {employee.name}
            </h2>
            <h3 className="w-1/5 text-blue-400 text-center">
              {employee.taskCount.new_task}
            </h3>
            <h3 className="w-1/5 text-green-400 text-center">
              {employee.taskCount.active}
            </h3>
            <h3 className="w-1/5 text-pink-400 text-center">
              {employee.taskCount.completed}
            </h3>
            <h3 className="w-1/5 text-yellow-400 text-center">
              {employee.taskCount.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
