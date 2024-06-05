import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className="w-screen h-screen overflow-hidden flex relative">
      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 lg:hidden z-30"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Mobile Button (same as before) */}
      <button
        className="fixed top-4 left-4 z-30 lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {/* Hamburger icon or similar */}
        Menu
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          z-40 fixed top-0 left-0 h-screen w-64 bg-white
          shadow-lg transform transition-transform duration-300 ease-in-out 
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0
        `}
      >
        <nav className="h-full flex flex-col items-center justify-center">
          <Link to="/dashboard" className="py-2 w-full text-center">
            Dashboard
          </Link>
          <Link to="/settings" className="py-2 w-full text-center">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content (same as before) */}
      <main
        className={`
          flex-grow flex flex-col items-center justify-center transition-all duration-300 ease-in-out
          ml-0 lg:ml-64  
        `}
      >
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
