import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-pink-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-400 text-sm py-1 px-3 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-3">
        <button className="bg-purple-500 rounded text-sm py-1 px-2 cursor-pointer">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
