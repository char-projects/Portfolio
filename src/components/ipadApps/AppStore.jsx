import React from "react";

const AppStore = () => {
    const appstore = [
        { title: "React", info: "@18.2.0" },
        { title: "Tailwind CSS", info: "@3.2.7" },
        { title: "GSAP", info: "@3.11.1" },
        { title: "JavaScript", info: "ES6+" },
        { title: "HTML", info: "HTML5" },
        { title: "CSS", info: "CSS3" },
        { title: "Vite", info: "@4.5.9" },
        { title: "Framer-Motion", info: "@9.0.7" },
        { title: "Three.js", info: "@0.149.0" },
    ];


    // Separate the apps into two categories for two columns
    const languagesAndCoreTechnologies = appstore.filter(
        (app) =>
            app.title === "JavaScript" ||
            app.title === "HTML" ||
            app.title === "CSS" ||
            app.title === "React" ||
            app.title === "Tailwind CSS"
    );

    const librariesAndTools = appstore.filter(
        (app) =>
            app.title !== "JavaScript" &&
            app.title !== "HTML" &&
            app.title !== "CSS" &&
            app.title !== "React" &&
            app.title !== "Tailwind CSS"
    );

    return (
        <div
            className="bg-gradient-to-br from-[#007aff] to-[#5ac8fa] p-6 flex h-full flex-col shadow-lg"
        >
            <div className="header flex items-center justify-between mt-6 mb-8">
                <h1 className="text-white text-3xl font-semibold">Tech Stack</h1>
                <button className="app-icon bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-blue-500 font-semibold text-lg">+</span>
                </button>
            </div>
            <div className="apps flex space-x-4">
                {/* Column 1: Languages & Core Technologies */}
                <div className="column w-1/2">
                    {languagesAndCoreTechnologies.map((app, index) => (
                        <div
                            key={index}
                            className="app bg-white rounded-lg shadow-md p-4 mb-4"
                        >
                            <h3 className="text-xl font-bold text-blue-600">
                                {app.title}
                            </h3>
                            {app.info && (
                                <p className="text-gray-600">{app.info}</p>
                            )}
                        </div>
                    ))}
                </div>
                {/* Column 2: Libraries & Tools */}
                <div className="column w-1/2">
                    {librariesAndTools.map((app, index) => (
                        <div
                            key={index}
                            className="app bg-white rounded-lg shadow-md p-4 mb-4"
                        >
                            <h3 className="text-xl font-bold text-blue-600">
                                {app.title}
                            </h3>
                            {app.info && (
                                <p className="text-gray-600">{app.info}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button
                    className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full"
                >
                    Update Stack
                </button>
            </div>
        </div>
    );
};

export default AppStore;

