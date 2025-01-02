import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [group, setGroup] = useState("");

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="text-center text-gray-400 text-lg mb-8">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <form className="bg-gray-900 p-8 rounded-xl shadow-xl space-y-6">
        {/* Destination Input */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">
            What is your destination of choice?
          </label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            How many days are you planning your trip?
          </label>
          <input
            type="number"
            placeholder="e.g., 3"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            What is your budget? 💵
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setBudget("cheap")}
              className={`px-4 py-3 w-full rounded-lg ${
                budget === "cheap" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Cheap
            </button>
            <button
              type="button"
              onClick={() => setBudget("moderate")}
              className={`px-4 py-3 w-full rounded-lg ${
                budget === "moderate" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Moderate
            </button>
            <button
              type="button"
              onClick={() => setBudget("luxury")}
              className={`px-4 py-3 w-full rounded-lg ${
                budget === "luxury" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Luxury
            </button>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            Who do you plan on traveling with? ✈️
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setGroup("solo")}
              className={`px-4 py-3 rounded-lg ${
                group === "solo" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Just Me
            </button>
            <button
              type="button"
              onClick={() => setGroup("couple")}
              className={`px-4 py-3 rounded-lg ${
                group === "couple" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              A Couple
            </button>
            <button
              type="button"
              onClick={() => setGroup("family")}
              className={`px-4 py-3 rounded-lg ${
                group === "family" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Family
            </button>
            <button
              type="button"
              onClick={() => setGroup("friends")}
              className={`px-4 py-3 rounded-lg ${
                group === "friends" ? "bg-purple-500" : "bg-gray-800"
              } text-gray-300 hover:bg-purple-600 focus:outline-none`}
            >
              Friends
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-xl hover:scale-105 transform transition-all focus:outline-none"
        >
          Generate Trip
        </button>
      </form>
    </div>
  );
}

export default CreateTrip;
