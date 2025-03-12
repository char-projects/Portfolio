import React, { useState } from "react";

const Safari = () => {
    const websites = [
        { title: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
        { title: "CSS Tricks", url: "https://css-tricks.com/" },
        { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
        { title: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
        { title: "A List Apart", url: "https://alistapart.com/" },
        { title: "Dev.to", url: "https://dev.to/" },
        { title: "CSS Layout", url: "https://csslayout.io/" },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="safari-container bg-gray-50 p-4 h-full shadow-xl">
            {/* Safari Header */}
            <div className="safari-header flex items-center justify-between bg-white p-2 rounded-lg shadow-md mb-4">
                <div className="nav-buttons flex items-center space-x-4">
                    <button className="bg-gray-200 rounded-full p-2">
                        <span className="text-gray-800 text-xl">←</span>
                    </button>
                    <button className="bg-gray-200 rounded-full p-2">
                        <span className="text-gray-800 text-xl">→</span>
                    </button>
                </div>
                <input
                    type="text"
                    className="search-bar bg-transparent border-none text-lg text-gray-800 w-full mx-4 placeholder-gray-500"
                    placeholder="Search or type URL"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Tabs Section */}
            <div className="tabs-container mb-4">
                <div className="tabs flex space-x-4 overflow-x-auto">
                    {websites.map((website, index) => (
                        <div
                            key={index}
                            className={`tab py-2 px-4 cursor-pointer rounded-full transition-all duration-300 ${
                                activeTab === index
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {website.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="content bg-white rounded-lg p-4 shadow-lg overflow-auto flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800">{websites[activeTab].title}</h2>
                <p className="text-gray-600 mt-2">
                    <a
                        href={websites[activeTab].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {websites[activeTab].url}
                    </a>
                </p>
            </div>

            {/* Footer with "New Tab" Button */}
            <div className="footer flex justify-center items-center mt-4">
                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold transition-all duration-200 hover:bg-blue-600"
                    onClick={() => alert("New tab opened!")}
                >
                    New Tab
                </button>
            </div>
        </div>
    );
};

export default Safari;
