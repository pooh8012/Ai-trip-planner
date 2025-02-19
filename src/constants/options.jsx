export const SelectTravelersList = [
  {
    id: 1,
    title: "Solo",
    desc: "Traveling alone for personal exploration.",
    icon: "🧑‍🚀",
    people: "Just Me",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Perfect for romantic getaways.",
    icon: "❤️",
    people: "A Couple",
  },
  {
    id: 3,
    title: "Family",
    desc: "Enjoy with your loved ones.",
    icon: "👨‍👩‍👧‍👦",
    people: "Family",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Trips with your best pals.",
    icon: "👯‍♂️",
    people: "Friends",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    description: "Budget-friendly options for saving money.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    description: "Balanced between cost and comfort.",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    description: "Premium experiences for indulgence.",
    icon: "💎",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location :{location}, for {totalDays}  Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName , Hotel address , Price,image url, geo coordinates , rating , descriptions and suggest itinerary with placeName , placeDetails, Place Image URL , Geo Coordinates , ticket Pricing , Time Travel each of the location {totalDays} days with each day with the best time to visit in JSON format";
