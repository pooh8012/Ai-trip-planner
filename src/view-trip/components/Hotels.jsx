import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  const hotels = trip?.tripData?.hotel_options || [];

  return (
    <div className="">
      <h2 className=" pt-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-center mb-12">
        🏨 <span>Hotel Recommendations</span>
      </h2>
      <div className="p-8 bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-2xl">
        {hotels.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            😞 No hotel data available. Start planning your stay!
          </p>
        ) : (
          <div className="space-y-6">
            {hotels.map((hotel, index) => (
              <Link
                to={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  hotel.hotel_name +
                  "," +
                  hotel.hotel_address
                }
                target="_blank"
                key={index}
                className="block p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-6">
                  {/* Hotel Image */}
                  <img
                    src="/img.jpg"
                    alt="Hotel"
                    className="w-24 h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  />
                  {/* Hotel Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center space-x-2">
                      🏩 <span>{hotel.hotel_name}</span>
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">
                      📍 {hotel.hotel_address}
                    </p>
                    <p className="text-sm font-medium text-teal-400">
                      💰 {hotel.price || "Price not available"}
                    </p>
                    <p className="text-sm font-medium text-yellow-400">
                      ⭐ {hotel.rating || "Rating not available"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotels;
