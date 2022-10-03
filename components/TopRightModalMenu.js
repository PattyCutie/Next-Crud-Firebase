import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useAuth } from "../context/AuthContext";

export default function TopRightModalMenu(props) {
  const { setOpenModal } = props;

  const [_document, set_document] = useState(null);

  const { logout } = useAuth()

  useEffect(() => {
    set_document(document)
  }, [])

  if (!_document) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="absolute z-10 top-12 right-5 w-60 h-52 rounded-lg text-lg sm:text-xl bg-rose-100 text-stone-500 flex flex-col">
      <div
        className="flex items-center justify-between 
      border-b-2 border-solid border-stone-400 p-4"
      >
        <h1 className="text-xl sm:text-2xl font-extrabold select-none">Menu</h1>
        <i
          onClick={() => setOpenModal(false)}
          className="fa-solid fa-xmark duration-300 hover:rotate-90 cursor-pointer text-2xl sm:text-4xl"
        ></i>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h2 
        onClick={() => {
          logout()
          setOpenModal(false)
        }}
        className="select-none cursor-pointer duration-300 hover:pl-5">Logout</h2>
      </div>
    </div>,
    _document.getElementById('portal')
  );
}
