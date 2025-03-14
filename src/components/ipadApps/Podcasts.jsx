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
        img: "https://files.merca20.com/uploads/2024/10/Designer-8.jpeg",
    },
    {
        title: "Traveling",
        description: "Learn more about this in the Google Maps app",
        img: "https://eurocitymalta.com/wp-content/uploads/2024/05/B08931.webp",
    },
    {
        title: "Reading",
        description: "Learn more about this in the Books app",
        img: "https://rukminim2.flixcart.com/image/720/864/xif0q/book/0/z/z/-original-imahyywmykxb7xrz.jpeg?q=60&crop=false",
    },
    {
        title: "Coding",
        description: "Learn more about this in the GitHub app",
        img: "https://a-static.mlcdn.com.br/450x450/laptop-infantil-barbie-dream-30-atividades-candide/magazineluiza/183737200/d0ce723e595421e5620e4a217949ba64.jpg",
    },
    {
        title: "Languages",
        description: "Learn more about this in the Duolingo app",
        img: "https://i.ytimg.com/vi/uvvejQXwdT0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWZijoahhGNvkcVtq6P5NPi6cuJQ",
    },
];

const Podcasts = () => {
    return (
        <div className="min-h-full bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] text-white font-sans flex flex-col items-center py-6">
            {/* Header */}
            <div className="text-center text-4xl font-semibold mb-8">Hobbies</div>

            {/* Episode List */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-6xl px-6">
                {PodcastEpisodes.map((episode, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#3E3E3E] to-[#212121] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={episode.img} alt={episode.title} className="w-full h-40 object-cover rounded-t-2xl bg-white" />
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
