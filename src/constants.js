import {
    airoplane,
    BestFlights,
    Customization,
    europe,
    LocalEvents,
    london,
    rome,
    weather,
} from "./assets";

export const links = [
    {
        id: 1,
        title: "Categories",
        url: "#categories",
    },
    {
        id: 2,
        title: "Destinations",
        url: "#destinations",
    },
    {
        id: 3,
        title: "Bookings",
        url: "#",
    },
    {
        id: 4,
        title: "About Us",
        url: "#",
    },
    {
        id: 5,
        title: "Contact Us",
        url: "#",
    },
];
export const cards = [
    {
        id: 1,
        image: weather,
        title: "Calculated Weather",
        content: "Get real-time forecasts to plan your trips perfectly.",
    },
    {
        id: 2,
        image: airoplane,
        title: "Best Flights",
        content:
            "Find affordable, convenient flights tailored to your journey.",
    },
    {
        id: 3,
        image: LocalEvents,
        title: "Local Events",
        content:
            "Discover festivals, shows, and events around your destination.",
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
        trip: "Full Europe",
        image: europe,
        price: "$19k",
        desc: "28 days trip",
    },
];
