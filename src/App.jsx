import { useEffect, useState } from "react";
import "./App.css";
import Login from "./componants/Auth/Login";
import EmployeeDashboard from "./componants/DashBoard/EmployeeDashboard";
import AdminDashboard from "./componants/DashBoard/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "1234") {
      console.log("This is admin");
      setUser("admin");
    } else if (email == "user@me.com" && password == "1234") {
      console.log("This is User");
      setUser("employee");
    } else {
      alert("Wrong Cridentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
}

export default App;
