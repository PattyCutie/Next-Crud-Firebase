import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div className=" flex flex-col min-h-screen  relative bg-red-500">
        <Header />
        <main className="flex flex-1 flex-col p-4">
            {children}
            
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
