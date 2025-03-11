import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./componants/Auth/Login";
import EmployeeDashboard from "./componants/DashBoard/EmployeeDashboard";
import AdminDashboard from "./componants/DashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  console.log(authData?.employees);

  useEffect(() => {
    if (!authData) return; // Ensure hooks run in the same order

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser); // Store full user data
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (!authData) {
      alert("Authentication data not loaded yet.");
      return;
    }

    const admin = authData.admin.find(
      (e) => email === e.email && password === e.password
    );

    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", ...admin })
      );
      return;
    }

    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", ...employee })
      );
      return;
    }

    alert("Wrong Credentials");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard userData={loggedInUserData} />
      ) : (
        <EmployeeDashboard userData={loggedInUserData} />
      )}
    </>
  );
}

export default App;
