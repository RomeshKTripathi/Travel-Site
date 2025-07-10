import {
  airoplane,
  alitalia,
  axon,
  Customization,
  europe,
  expedia,
  greece,
  india,
  BestFlights,
  jetstar,
  LocalEvents,
  london,
  qantas,
  rome,
  romeSquare,
  weather,
  greece_1,
} from "./assets";
import { Car, Location, Payment } from "./Components/Icons";

export const links = [
  {
    id: 1,
    title: "Destinations",
    url: "#destinations",
  },
  {
    id: 2,
    title: "Services",
    url: "#services",
  },
  {
    id: 3,
    title: "Bookings",
    url: "#bookings",
  },
  {
    id: 4,
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "#contact-us",
  },
];
export const cards = [
  {
    id: 1,
    image: BestFlights,
    title: "Best Flights",
    content: "Find affordable, convenient flights tailored to your journey.",
  },
  {
    id: 2,
    image: LocalEvents,
    title: "Local Events",
    content: "Discover festivals, shows, and events around your destination.",
  },
  {
    id: 3,

    image: weather,
    title: "Calculated Weather",
    content: "Get real-time forecasts to plan your trips perfectly.",
  },
  {
    id: 4,
    image: Customization,
    title: "Customization",
    content: "Personalize your travel experience to match your style.",
  },
];

export const destinations = [
  {
    id: 1,
    trip: "Rome, Italy",
    image: rome,
    price: "$8k",
    desc: "15 days trip",
  },
  {
    id: 2,
    trip: "London, UK",
    image: london,
    price: "$10k",
    desc: "12 days trip",
  },
  {
    id: 3,
    trip: "India",
    image: india,
    price: "$28k",
    desc: "40 days trip",
  },
  {
    id: 4,
    trip: "Full Europe",
    image: europe,
    price: "$19k",
    desc: "28 days trip",
  },
];

export const BookingSteps = [
  {
    id: 1,
    Icon: Location,
    title: "Choose Destination",
    desc: "Browse top spots and pick the place you dream of visiting.",
    className: "bg-theme-orange",
  },
  {
    id: 2,
    Icon: Payment,
    title: "Make Payment",
    desc: "Secure your booking quickly with multiple payment options available.",
    className: "bg-theme-yellow",
  },
  {
    id: 3,
    Icon: Car,
    title: "Reach Airport on Selected Date",
    desc: "Arrive on time with reminders and ride assistance if needed.",
    className: "bg-theme-teal",
  },
];

export const upcoming_trip = {
  destination: "Greece",
  startDate: "6/14/2025",
  endDate: "6/29/2025",
  by: "Robbin Johnson",
  type: ["Adventure", "Leisure", "Historical"],
  totalTourists: 24,
  featuredImage: greece_1,
};

export const ongoing_trip = {
  destination: "Rome",
  startDate: "6/14/2025",
  endDate: "6/29/2025",
  by: "Robbin Johnson",
  totalTourists: 24,
  featuredImage: romeSquare,
};

export const brands = [expedia, axon, alitalia, jetstar, qantas];
