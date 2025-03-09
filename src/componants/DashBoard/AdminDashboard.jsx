import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = () => {
  return (
    <>
      <div className="p-7 w-full flex flex-col bg-black min-h-screen">
        <Header />
        <CreateTask></CreateTask>
        <AllTasks />
      </div>
    </>
  );
};

export default AdminDashboard;
