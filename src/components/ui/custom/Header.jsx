import React from "react";

function Header() {
  return (
    <header className="w-screen  p-4 bg-gradient-to-r from-indigo-800 via-purple-900 to-black shadow-lg flex items-center justify-between backdrop-blur-md bg-opacity-80">
      <div className="flex ">
        <img
          src="/logo2.svg"
          alt="Logo"
          className="w-100 h-240 animate-bounce"
        />
        <h1 className="text-white text-2xl font-bold  drop-shadow-lg">
          AI Trip Planner
        </h1>
      </div>
    </header>
  );
}
export default Header;
