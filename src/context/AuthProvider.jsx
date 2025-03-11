import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // localStorage.clear();
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
