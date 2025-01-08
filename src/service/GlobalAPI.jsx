import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";

export const GetPlaceDetails = (data) => {
  const params = {
    query: data.textQuery,
    key: import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
  };

  return axios.get(BASE_URL, { params });
};
