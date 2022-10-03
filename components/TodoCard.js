import React from "react";

export default function TodoCard(props) {
  const { children } = props;

  return (
    <div
      className="p-2 sm:p-3 border-2 border-solid border-white 
    flex items-stretch text-white rounded-lg"
    >
      <div className="flex-1">
        <h1 className="">{children}</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className=" border-2 border-white rounded-full">
          <i className="fa-solid fa-pencil p-2 duration-300 hover:rotate-45 cursor-pointer"></i>
        </div>
        <div className=" border-2 border-white rounded-full">
          <i className="fa-solid fa-trash-can p-2 duration-300 hover:scale-125 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
