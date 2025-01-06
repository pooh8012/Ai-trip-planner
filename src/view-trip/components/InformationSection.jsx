import React from "react";

function InformationSection({ trip }) {
  if (!trip) return null;

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-lg">
      <img
        src={"/img.jpg"}
        alt="Trip Image"
        className="h-[340px] w-full object-cover rounded-xl mb-4"
      />
      <div className="text-white space-y-2">
        <h2 className="text-xl font-semibold">
          {trip?.userSelection?.location}
        </h2>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="calendar">
              🗓️
            </span>
            <span>{trip?.userSelection?.numberOfDay} days</span>
          </div>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="money">
              💰
            </span>
            <span>{trip?.userSelection?.budget}</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={"/backpack-traveller-man.png"}
              alt="traveller"
              className="h-6"
            />
            <span>{trip?.userSelection?.traveler}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
