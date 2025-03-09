import { useState } from "react";
import "./App.css";
import Login from "./componants/Auth/Login";
import EmployeeDashboard from "./componants/DashBoard/EmployeeDashboard";
import AdminDashboard from "./componants/DashBoard/AdminDashboard";

function App() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard></AdminDashboard>
    </>
  );
}

export default App;
