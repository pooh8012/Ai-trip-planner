import React from "react";

function InformationSection({ trip }) {
  if (!trip) return null;

  return (
    <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
      <img
        src="/img.jpg"
        alt="Trip"
        className="h-60 w-full object-cover rounded-lg mb-6 hover:scale-105 transition duration-300"
      />
      <div className="text-gray-300 space-y-4">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
          ✈️ <span>{trip?.userSelection?.location || "Your Destination"}</span>
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            🗓️ <span>{trip?.userSelection?.numberOfDay || "0"} days</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            💰 <span>{trip?.userSelection?.budget || "N/A"}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            🎒 <span>{trip?.userSelection?.traveler || "Solo"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
