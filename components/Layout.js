import React from "react";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const { children } = props;
  const { currentUser } = useAuth()

  return (
    <div>
      <div className="flex flex-col min-h-screen  relative">
        {currentUser && <Header /> }

        <main className="flex flex-1 flex-col p-5 bg-red-500">
            {children}
            
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
