import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col bg-red-400 text-center p-2 items-center justify-center">
      <h4 className="text-white text-sm lg:text-lg font-semibold py-2">
        CRUD APP with Next.js - Firebase - tailwind Css
      </h4>
      <div className="flex text-white items-center justify-center">
        <i className="fa-brands fa-github text-xl px-2"></i>
        <i className="fa-brands fa-instagram text-xl px-2"></i>
        <i className="fa-brands fa-linkedin text-xl px-2"></i>
      </div>
    </div>
  );
}
