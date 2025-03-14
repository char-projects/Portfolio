import React from "react";
import { FaChevronLeft, FaChevronRight, FaRedo, FaSearch } from "react-icons/fa";

const Safari = () => {
    const tabs = [
        { title: "Harvard", url: "https://www.edx.org/school/harvardx", icon: "🌐" },
        { title: "Reddit", url: "https://www.reddit.com/r/Catswithjobs/", icon: "🐈‍⬛" },
        { title: "Stack Overflow", url: "https://stackoverflow.com", icon: "💬" },
        { title: "Deep Sea", url: "https://neal.fun/deep-sea/", icon: "📚" },
        { title: "FreeCodeCamp", url: "https://www.freecodecamp.org", icon: "🚀" },
        { title: "GeoGuessr", url: "https://www.geoguessr.com/", icon: "🖥️" },
        { title: "LeetCode", url: "https://www.leetcode.com/", icon: "🧠" },
    ];

    return (
        <div className="w-full h-full bg-gray-100 flex flex-col">
            {/* Top Bar */}
            <div className="bg-gray-200 p-3 flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-4 px-2">
                    <FaChevronLeft className="text-gray-600 text-lg" />
                    <FaChevronRight className="text-gray-400 text-lg" />
                    <FaRedo className="text-gray-600 text-lg" />
                </div>
                <div className="flex-grow mx-4 relative">
                    <input
                        type="text"
                        placeholder="Search or enter website name"
                        className="w-full px-10 py-1.5 bg-white border rounded-full shadow-sm text-center text-gray-800"
                    />
                    <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
                </div>
                <div className="w-6"></div> {/* Spacer */}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center justify-start px-4 py-7">
                <h2 className="text-xl text-gray-700 mb-5">7 Tabs</h2>
                <div className="w-full space-y-3">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white shadow-md rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                            <span className="text-gray-700 text-lg">{tab.icon} {tab.title}</span>
                            <a href={tab.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                {tab.url}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Safari;
