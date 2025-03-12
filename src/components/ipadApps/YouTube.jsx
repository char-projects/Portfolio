import React from 'react';

const videoData = [
    {
        title: "Why Coding is the Future",
        description: "A deep dive into the future of programming and tech careers. Discover the skills that will dominate the next decade.",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Black_Programming_Icon.svg", // Replace with relevant image
        channel: "TechTube",
        views: "3K views",
        time: "12:45",
        link: "https://www.youtube.com/",
    },
    {
        title: "Understanding Artificial Intelligence",
        description: "A simplified explanation of AI, how it works, and its applications in real-world scenarios.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Artificial_Intelligence_icon.svg", // Replace with relevant image
        channel: "AIExplained",
        views: "2K views",
        time: "10:30",
        link: "https://www.youtube.com/",
    },
    {
        title: "My Favorite Coding Resources",
        description: "A list of websites, books, and tools that have helped me as a programmer. Useful for beginners and experts alike.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Code_icon.svg", // Replace with relevant image
        channel: "DevResources",
        views: "1.5K views",
        time: "8:20",
        link: "https://www.youtube.com/",
    },
    {
        title: "The Secrets of the Universe Explained",
        description: "A fascinating exploration into the universe, from black holes to quantum physics, in a way that's easy to understand.",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Space_Icon.svg", // Replace with relevant image
        channel: "SpaceTime",
        views: "10K views",
        time: "14:10",
        link: "https://www.youtube.com/",
    },
    {
        title: "Top 10 Interesting Facts about History",
        description: "An exciting compilation of lesser-known facts from history that will blow your mind!",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Historical_Paper_Icon.svg", // Replace with relevant image
        channel: "HistoryTalks",
        views: "2.8K views",
        time: "6:00",
        link: "https://www.youtube.com/",
    },
];

const YouTube = () => {
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-black">
                <img
                    src="/src/assets/ipad/youtube.png"
                    alt="YouTube Logo"
                    className="w-20 h-auto"
                />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-3/4 bg-gray-800 text-white py-2 px-4 rounded-full focus:outline-none"
                />
            </div>

            {/* Video Feed */}
            <div className="p-6 space-y-8">
                {videoData.map((video, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 bg-gray-900 rounded-lg cursor-pointer mb-4"
                    >
                        {/* Video Thumbnail */}
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-56 h-32">
                                <img
                                    src={video.img}
                                    alt={video.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
                                    ▶️
                                </div>
                            </div>
                        </a>

                        {/* Video Info */}
                        <div className="flex-1 py-2">
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                            </a>
                            <p className="text-sm text-gray-400">{video.description}</p>
                            <div className="flex items-center text-gray-500 text-sm mt-2">
                                <p className="mr-4">{video.channel}</p>
                                <p className="mr-4">{video.views}</p>
                                <p>{video.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTube;
