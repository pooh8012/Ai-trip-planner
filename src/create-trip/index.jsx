import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelersList,
} from "../constants/options";
import { Input } from "../components/ui/input";
import { chatSession } from "../service/AIModal";

function CreateTrip() {
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [group, setGroup] = useState("");
  const [place, setPlace] = useState("");
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async (e) => {
    e.preventDefault();
    const tripData = {
      location: formData.location || "",
      numberOfDay: formData.numberOfDay || "",
      budget: formData.budget || "",
      traveler: formData.traveler || "",
    };
    // console.log("Generated Trip:", tripData);

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.numberOfDay)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="text-center text-gray-400 text-lg mb-8">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <form
        className="bg-gray-900 p-8 rounded-xl shadow-xl space-y-6"
        onSubmit={onGenerateTrip}
      >
        {/* Destination Input */}
        <div>
          <label className="block text-lg font-medium text-white mb-2">
            What is your destination of choice?
          </label>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v.label);
              },
            }}
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            How many days are you planning your trip?
          </label>
          <Input
            type="number"
            placeholder="e.g., 3"
            value={days}
            onChange={(e) => handleInputChange("numberOfDay", e.target.value)}
            className="w-full px-4 py-3 text-white !important bg-gray-800 placeholder-gray-500 rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            What is your budget? 💵
          </label>
          <div className="flex space-x-4">
            {SelectBudgetOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInputChange("budget", option.title)}
                className={`px-4 py-3 w-full rounded-lg ${
                  budget === option.title.toLowerCase()
                    ? "bg-purple-500"
                    : "bg-gray-800"
                } text-gray-300 hover:bg-purple-600 focus:outline-none`}
              >
                {option.icon} {option.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            Who do you plan on traveling with? ✈️
          </label>
          <div className="grid grid-cols-2 gap-4">
            {SelectTravelersList.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInputChange("traveler", option.people)}
                className={`px-4 py-3 rounded-lg ${
                  group === option.title.toLowerCase()
                    ? "bg-purple-500"
                    : "bg-gray-800"
                } text-gray-300 hover:bg-purple-600 focus:outline-none`}
              >
                {option.icon} {option.people}
              </button>
            ))}
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
