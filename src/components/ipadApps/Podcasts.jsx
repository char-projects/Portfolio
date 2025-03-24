import React from "react";
import {barbiebook, barbiecomputer, piano, pinklanguages, suitcase, treadmill} from "../../assets/index.js";

const PodcastEpisodes = [
    {
        title: "Piano",
        description: "Learn more about this in the Music app",
        img: piano,
        // img: "https://carusopianos.com/images/stories/virtuemart/product/steinway_m_255902_pink_2__1686243141_38.jpg",
    },
    {
        title: "Fitness",
        description: "Learn more about this in the Health app",
        img: treadmill,
    },
    {
        title: "Traveling",
        description: "Learn more about this in the Google Maps app",
        img: suitcase,
    },
    {
        title: "Reading",
        description: "Learn more about this in the Books app",
        img: barbiebook,
    },
    {
        title: "Coding",
        description: "Learn more about this in the GitHub app",
        img: barbiecomputer,
    },
    {
        title: "Languages",
        description: "Learn more about this in the Duolingo app",
        img: pinklanguages,
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
