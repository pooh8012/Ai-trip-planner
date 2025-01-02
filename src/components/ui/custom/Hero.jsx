import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Hero() {
  return (
    <div className="w-screen relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        params={{
          particles: {
            number: { value: 100 },
            color: { value: ["#ffffff", "#a855f7", "#9333ea"] },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { speed: 2 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <h2 className="text-6xl font-extrabold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 animate-fadeIn">
        Experience AI-Powered Travel Planning
      </h2>
      <p className="text-xl mt-4 text-gray-300 animate-fadeIn">
        Your next adventure, personalized to perfection.
      </p>
      <Link to={"/create-trip"}>
        {" "}
        <button className="mt-8 px-8 py-4  animate-fadeIn font-extrabold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:shadow-xl transition-transform transform hover:scale-105">
          Get Started,It's Free
        </button>
      </Link>

      <img
        src="/heroimg.jpg"
        alt="Futuristic Illustration"
        className="absolute bottom-0 w-full opacity-20 pointer-events-none"
      />
    </div>
  );
}
export default Hero;
