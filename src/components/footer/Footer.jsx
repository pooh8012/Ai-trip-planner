// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="w-screen p-4 bg-gray-900 text-gray-400 flex flex-col items-center justify-center text-sm  ">
      <p>
        &copy; {new Date().getFullYear()} AI Trip Planner. All rights reserved.
      </p>
      <div className="flex mt-2 space-x-4">
        <a className="hover:text-white">Privacy Policy</a>
        <a className="hover:text-white">Terms of Service</a>
        <a className="hover:text-white">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
