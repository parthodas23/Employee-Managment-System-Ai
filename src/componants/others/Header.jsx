import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
  const [userName, setUserName] = useState("Admin");
  useEffect(() => {
    if (data) {
      setUserName(data.name);
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="text-xl text-white bg-red-800 rounded-xl px-5 py-2 cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
