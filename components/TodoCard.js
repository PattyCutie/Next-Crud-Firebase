import React from "react";

export default function TodoCard(props) {
  const { children, update,  updatedValue, setUpdatedValue, todoKey, handleUpdate, handleAddUpdated, handleDelete } = props;

  return (
    <div
      className="relative p-2 sm:p-3 border-2 border-solid border-white 
    flex items-stretch text-white rounded-lg bg-re"
    >
      <div className="flex flex-1">
        
          {!(update  === todoKey) ? (
            <>
            {children}
            </>
            )       
             : (
              <input
              type="text" 
              className="bg-inherit flex-1 text-white outline-none"
              value={updatedValue}
              onChange={(e) => setUpdatedValue(e.target.value)} 
              />
            )}
          
          {/* {children} */}
        
      </div>
      <div className="flex items-center gap-2">
        <div className=" flex border-2 border-white rounded-full">
          {(update === todoKey) ? (
          <i
          onClick={handleUpdate} 
          className="fa-solid fa-check p-2 duration-300 hover:rotate-30 cursor-pointer"></i> 
          ) : (
          <i
            onClick={handleAddUpdated(todoKey)} 
            className="fa-solid fa-pencil p-2 duration-300 hover:rotate-45 cursor-pointer"></i>
            ) 
        }
        </div>
        <div className="flex border-2 border-white rounded-full">
          <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash-can p-2 duration-300 hover:scale-125 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
