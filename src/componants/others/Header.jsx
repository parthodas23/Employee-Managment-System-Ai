import React from "react";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="font-semibold">{data.name} 👋</span>
      </h1>
      <button className="text-xl text-white bg-red-800 rounded-xl px-5 py-2 cursor-pointer">
        Log Out
      </button>
    </div>
  );
};

export default Header;
