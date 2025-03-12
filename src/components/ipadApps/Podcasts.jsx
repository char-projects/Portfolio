import React from "react";

const PodcastEpisodes = [
    {
        title: "Piano",
        description: "Learn more about this in the Music app",
        img: "https://perfumes24h.com/static/imagenes/productos/product_info/BXqi4rf9LR8mmUdV_961.webp",
        // img: "https://carusopianos.com/images/stories/virtuemart/product/steinway_m_255902_pink_2__1686243141_38.jpg",
    },
    {
        title: "Fitness",
        description: "Learn more about this in the Health app",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Logo_Fitness_24.png/1280px-Logo_Fitness_24.png",
    },
    {
        title: "Travel",
        description: "Learn more about this in the Google Maps app",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_of_the_International_Air_Transport_Association_%28IATA%29.svg",
    },
    {
        title: "Reading",
        description: "Learn more about this in the Books app",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Book_icon_black.svg",
    },
    {
        title: "Coding",
        description: "Learn more about this in the GitHub app",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Java_logo.png",
    },
];

const Podcasts = () => {
    return (
        <div className="min-h-full bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] text-white font-sans flex flex-col items-center py-6">
            {/* Header */}
            <div className="text-center text-4xl font-semibold mb-8">Podcasts</div>

            {/* Episode List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
                {PodcastEpisodes.map((episode, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#3E3E3E] to-[#212121] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={episode.img} alt={episode.title} className="w-full h-40 object-cover rounded-t-2xl" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{episode.description}</p>
                            <p className="text-blue-400 text-sm hover:underline">Listen Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Podcasts;
