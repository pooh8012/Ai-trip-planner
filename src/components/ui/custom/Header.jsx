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
      <button className="px-6 py-3 mr-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105">
        Sign In
      </button>
    </header>
  );
}
export default Header;
