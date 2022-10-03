import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-red-400 text-center p-2 items-center justify-center">
      <h4 className="text-white text-sm lg:text-lg font-semibold">
        CRUD APP with Next.js - Firebase - tailwind Css
      </h4>
      <div className="flex text-white items-center justify-center gap-10">
        <a href="https://github.com/PattyCutie" target="_blank">
        <i className="fa-brands fa-github text-xl hover:opacity-40 duration-300"></i>
        </a>
        <a href="https://www.instagram.com/pattyindev/" target="_blank">
        <i className="fa-brands fa-instagram text-xl hover:opacity-40 duration-300"></i>
        </a>
        <a href="https://www.linkedin.com/in/patpicha-sit/" target="_blank">
        <i className="fa-brands fa-linkedin text-xl hover:opacity-40 duration-300"></i>
        </a>
      </div>
    </div>
  );
}
