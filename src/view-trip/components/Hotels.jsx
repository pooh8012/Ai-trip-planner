import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">
        Hotel Recommendations
      </h2>
      <div className="space-y-4">
        {trip?.tripData?.hotel_options?.map((hotel, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel.hotel_name +
              "," +
              hotel.hotel_address
            }
            target="_blank"
            key={index}
          >
            <div className="flex items-center space-x-4 bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition duration-300">
              <img
                src={"/img.jpg"}
                alt="Hotel"
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div className="text-white space-y-2">
                <h2 className="text-lg font-semibold">{hotel.hotel_name}</h2>
                <p className="text-sm text-gray-400">{hotel.hotel_address}</p>
                <p className="text-sm">{hotel.price}</p>
                <p className="text-sm">{hotel.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
