import React, { useState } from "react";
import TopRightModalMenu from "./TopRightModalMenu";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <TopRightModalMenu setOpenModal={setOpenModal} />}
      <div
        className="flex sticky top-0 left-0 w-full items-center bg-red-500 justify-between p-4 border-b-4 select-none border-solid  border-white
      text-white font-semibold"
      >
        <h1 className="uppercase text-3xl sm:text-6xl">
          crud
          <span className="px-5 text-sm sm:text-xl">todo app</span>
        </h1>

        <i
          onClick={() => setOpenModal(true)}
          className="fa-sharp fa-solid fa-user text-xl sm:text-2xl duration-300 hover:opacity-40 cursor-pointer sm:-3xl"
        />
      </div>
    </>
  );
}
