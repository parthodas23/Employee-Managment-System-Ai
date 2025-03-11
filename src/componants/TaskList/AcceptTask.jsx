import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);

  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-pink-400 text-sm py-1 px-3 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-3">
        <button className="bg-green-500 text-sm py-1 px-2 rounded cursor-pointer">
          Mark as Completed
        </button>
        <button className="bg-red-500 text-sm py-1 px-2 rounded cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
