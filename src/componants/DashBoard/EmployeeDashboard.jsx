import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ userData }) => {
  console.log(userData);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen ">
      <Header data={userData} />
      <TaskListNumber data={userData} />
      <TaskList data={userData} />
    </div>
  );
};

export default EmployeeDashboard;
