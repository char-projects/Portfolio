import React from 'react';
import {
    firetornado,
    helloworld,
    job,
    machinelearning,
    perlin,
    puppetpals,
    sudoku,
    youtube
} from "../../assets/index.js";

const videoData = [
    {
        title: "\"Hello, World\" in 5 CURSED languages\n",
        img: helloworld,
        channel: "Dreams of Code",
        views: "561K views",
        time: "13:06",
        link: "https://youtu.be/ehbSTazdhbU?si=487xcKoPssiQEw3q",
    },
    {
        title: "A Sudoku Secret To Blow Your Mind",
        img: sudoku,
        channel: "Numberphile",
        views: "2.4M views",
        time: "6:07",
        link: "https://youtu.be/pezlnN4X52g?si=KVeS1Jv4Tw4YYbc1",
        // https://www.youtube.com/watch?v=VLOKMjHEyhY
    },
    {
        title: "Machine Learning Explained in 100 Seconds",
        img: machinelearning,
        channel: "Fireship",
        views: "742K views",
        time: "2:34",
        link: "https://youtu.be/PeMlggyqz0Y?si=-_FNaXaEOCTya7h3",
    },
    {
        title: "How to find a job as a software developer",
        img: job,
        channel: "ThePrimeagen",
        views: "362K views",
        time: "5:09",
        link: "https://youtu.be/dQw4w9WgXcQ?si=hm-VvApDTRuwjShK",
    },
    {
        title: "How Does Perlin Noise Work?",
        img: perlin,
        channel: "Doggo's Science 2",
        views: "3.7K views",
        time: "4:28",
        link: "https://youtu.be/9B89kwHvTN4?si=UM6wUrGX_IlWNOCL",
    },
    {
        title: "Fire Tornado Explained",
        img: firetornado,
        channel: "Discovery",
        views: "239K views",
        time: "1:29",
        link: "https://youtu.be/vJVertGZJUM?si=dqEB5Z21AVutUs75",
    },
    {
        title: "Potter Puppet Pals: The Mysterious Ticking Noise",
        img: puppetpals,
        channel: "Neil Cicierega",
        views: "207M views",
        time: "2:06",
        link: "https://youtu.be/Tx1XIm6q4r4?si=QgTMYygoVICpNGtQ",
    },
];

const YouTube = () => {
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-black">
                <img
                    src={youtube}
                    alt="YouTube Logo"
                    className="w-24 h-auto"
                />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-3/4 border border-gray-500 text-gray-500 py-2 px-4 rounded-full focus:outline-none"
                />
            </div>

            {/* Video Feed */}
            <div className="px-5 py-3 space-y-6">
                {videoData.map((video, index) => (
                    <div
                        key={index}
                        className="flex space-x-4 cursor-pointer mb-4"
                    >
                        {/* Video Thumbnail */}
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <div className="relative w-56 h-32">
                                <img
                                    src={video.img}
                                    alt={video.title}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 px-2 py-1 rounded-md">
                                    <p className="text-white text-xs">{video.time}</p>
                                </div>
                            </div>
                        </a>

                        {/* Video Info */}
                        <div className="flex-1 py-2">
                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                            </a>
                            <p className="text-sm text-gray-400">{video.description}</p>
                            <p className="mr-4 text-gray-500 mt-1 text-sm">{video.views}</p>
                            <p className="mt-2 text-gray-300 text-[13px]">{video.channel}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTube;
