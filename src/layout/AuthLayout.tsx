import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <header className="bg-gray-800 text-white h-16 flex items-center ">
        <h1>
          <img src="http://emvapp.s3-website.eu-central-1.amazonaws.com/img/logo.9a9e701e.png" alt="Logo" className="img-custom"/>
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white h-10 flex items-center justify-center">
        <p>This footer is pending...</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
