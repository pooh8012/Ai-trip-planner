import React from "react";

function PlacesToVisit({ trip }) {
  const itinerary = trip?.tripData?.itinerary;

  if (!itinerary) {
    return (
      <p className="text-center text-gray-300 text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg ">
        😞 No itinerary data available. Let’s start planning your next
        adventure! 🚀
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-center mb-12">
        🗺️ Explore Amazing Places!
      </h2>
      <div className="relative space-y-8">
        {Object.entries(itinerary)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([day, details], index) => (
            <div
              key={index}
              className={`flex items-start space-x-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ${
                index % 2 === 0 ? "ml-0" : "ml-12"
              }`}
            >
              {/* Day and Activities Section */}
              <div className="w-2/5">
                <h3 className="text-2xl font-bold text-teal-400 capitalize mb-4">
                  📅 {day.replace("_", " ")}
                </h3>
                <ul className="space-y-4">
                  {details.activities.map((activity, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                        🌟 <span>{activity.place_name}</span>
                      </h4>
                      <p className="text-sm text-gray-400">
                        {activity.place_details ||
                          "A must-visit spot for adventure seekers!"}
                      </p>
                      <p className="text-sm text-gray-400">
                        🎟️ <strong>Tickets:</strong>{" "}
                        {activity.ticket_pricing || "Free"}
                      </p>
                      <p className="text-sm text-gray-400">
                        ⏱️ <strong>Travel Time:</strong>{" "}
                        {activity.travel_time || "N/A"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className="w-3/5">
                <img
                  src="/img.jpg"
                  alt={
                    details.activities[0]?.place_name || "Beautiful destination"
                  }
                  className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
