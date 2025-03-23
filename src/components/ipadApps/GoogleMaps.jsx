import React, {useState, useRef} from "react";
import {MapPin, Home} from "lucide-react";
import {motion} from "framer-motion";

const travelSpots = [
    {
        id: 1,
        name: "Barú, Colombia",
        img: "/src/assets/ipad/GoogleMapsPics/Baru.jpeg",
        description: "Tropical white beaches, bioluminescent plankton & tiny islands",
        mapLink: "https://maps.app.goo.gl/QSsFZHDUaVUrRT2B9",
    },
    {
        id: 2,
        name: "Fès, Morocco",
        img: "/src/assets/ipad/GoogleMapsPics/Fes.webp",
        description: "Colorful markets and tanneries in the ancient medina",
        mapLink: "https://maps.app.goo.gl/tYSWUs4pTp4rGAP58",
    },
    {
        id: 3,
        name: "Berlengas, Portugal",
        img: "/src/assets/ipad/GoogleMapsPics/Berlengas.jpeg",
        description: "Stunning beaches, a cool castle & endless water",
        mapLink: "https://maps.app.goo.gl/rBcZ99bkAhp6XqWK9",
    },
    {
        id: 4,
        name: "Vinicunca, Peru",
        img: "/src/assets/ipad/GoogleMapsPics/Vinicunca.avif",
        description: "Mesmerizing rainbow mountains, snow & alpacas",
        mapLink: "https://maps.app.goo.gl/byYmMadCETEv23Fq8",
    },
    {
        id: 5,
        name: "Gdańsk, Poland",
        img: "/src/assets/ipad/GoogleMapsPics/Gdansk.jpeg",
        description: "Colorful houses & great food",
        mapLink: "https://maps.app.goo.gl/cUqHwrUei7XUznkN8",
    },
    {
        id: 6,
        name: "Kerry, Ireland",
        img: "/src/assets/ipad/GoogleMapsPics/Kerry.jpeg",
        description: "Sheep, insane nature, cows & more sheep",
        mapLink: "https://maps.app.goo.gl/5ZcJk3WNxSgtJyiz5",
    },
];

const home = [
    {
        id: 1,
        name: "Bavaria, Germany",
        img: "/src/assets/ipad/GoogleMapsPics/Bavaria.jpg",
        description: "I spent most of my life there. It's a great place to grow up in",
        mapLink: "https://maps.app.goo.gl/kTAuUGjcaYSoxvKz5",
    },
    {
        id: 2,
        name: "Málaga, Spain",
        img: "/src/assets/ipad/GoogleMapsPics/Malaga.jpg",
        description: "I've spent almost 3 years here. I love the beach and the sun",
        mapLink: "https://maps.app.goo.gl/tYSWUs4pTp4rGAP58",
    },
]

const GoogleMaps = () => {
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const contentRef = useRef(null);

    const handleHomeButtonClick = () => {
        setShowEasterEgg(!showEasterEgg);
        if (contentRef.current) {
            contentRef.current.scrollTo({
                bottom: 200, // Adjust the number to scroll by the desired amount
                behavior: "smooth",
            });
        };
    };
    return (
        <div className="relative bg-gray-900 text-white min-h-screen w-full p-4">
            {/* Floating Search Bar */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-6 py-2 flex items-center shadow-lg w-3/4 max-w-md">
                <input
                    type="text"
                    placeholder="Search places..."
                    className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
                />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mt-16">My Favorite Places</h1>

            {/* Travel Cards */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                {travelSpots.map((spot) => (
                    <div
                        key={spot.id}
                        className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <img src={spot.img} alt={spot.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-1">{spot.name}</h2>
                            <p className="text-gray-400 text-sm">{spot.description}</p>
                        </div>
                        <a
                            href={spot.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
                        >
                            <MapPin className="text-white" size={20} />
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-12 flex justify-center relative">
                <button className="px-8 py-2 border rounded-lg text-white bg-gray-800 hover:bg-gray-700" onClick={handleHomeButtonClick}>
                    {showEasterEgg ? "Hide Home" : "Show Home"}
                </button>
                <motion.div animate={{ rotate: showEasterEgg ? 360 : 0 }}>
                    <Home className="absolute right-0 text-gray-400" />
                </motion.div>
            </div>
            {showEasterEgg && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {home.map((place) => (
                        <div
                            key={place.id}
                            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img src={place.img} alt={place.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-1">{place.name}</h2>
                                <p className="text-gray-400 text-sm">{place.description}</p>
                            </div>
                            <a
                                href={place.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
                            >
                                <MapPin className="text-white" size={20} />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GoogleMaps;
