import React, {useState} from "react";
import {Mic, Search} from "lucide-react";
import {profile_pic} from "../../assets/index.js";

const leftSection = [
    {
        items: [
            { name: "Dark Mode", icon: "🌙", toggle:true },
            { name: "Wi-Fi", icon: "🛜", value:"Off" },
            { name: "Bluetooth", icon: "🎧", value: "On" },
            { name: "Battery", icon: "🔋" },
            { name: "VPN", icon: "🔒", toggle:true },
        ],
    },
    {
        items: [
            { name: "General", icon: "⚙️", current:true },
            { name: "Accessibility", icon: "👥" },
            { name: "Apple Pencil", icon: "🖊️" },
            { name: "Camera", icon: "📷" },
        ],
    }
];
const rightSection = [
    {
        items: [
            { name: "Name", value: "Charlotte" },
            { name: "iPadOS Version", value: "18.3.2" },
            { name: "Model Name", value: "iPad Air (4th gen)" },
            { name: "Language", value: "English (US)" },
            { name: "Time Zone", value: "CET" }
        ],
    },
    {
        items: [
            { name: "Songs", value: "9" },
            { name: "Videos", value: "7" },
            { name: "Photos", value: "28" },
            { name: "Applications", value: "21" },
            { name: "Capacity", value: "64 GB" },
            { name: "Available", value: "42,42 GB" },
        ],
    },
    {
        items: [
            { name: "Cache", value: "999+ project ideas" },
            { name: "Backups", value: "Only after a disaster" },
            { name: "IDEs", value: "Vim, CLion, WebStorm, VSCode" },
        ],
    },
];

const SettingsApp = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [toggles, setToggles] = useState({
        "Dark Mode": true,
        "VPN": false,
    });

    const handleToggle = (name) => {
        setToggles((prev) => {
            const updatedToggles = { ...prev, [name]: !prev[name] };
            if (name === "Dark Mode") {
                setDarkMode(updatedToggles["Dark Mode"]); // Update dark mode state
            }
            return updatedToggles;
        });
    };

    return (
        <div
            className={`flex ${darkMode ? "bg-black text-white" : "bg-[#F2F2F7] text-black"}`}
        >
            <aside className={`w-2/5 pr-2 border-r-2 ${darkMode ? "border-[#1C1C1E]" : "border-[#E5E5E5]"}`}>
                {/* Side Bar */}
                <div className="flex items-center justify-between px-4 pt-10 pb-2">
                    <div className="text-[34px] font-bold">Settings</div>
                </div>
                <div className={`flex justify-between rounded-lg mb-4 p-2 ml-4 ${darkMode ? "bg-[#1C1C1E]" : "bg-[#E3E3E8]"}`}>
                    <button className="text-[#7F7F85] flex items-center gap-2">
                        <Search size={17} />
                        Search
                    </button>
                    <button>
                        <Mic size={17} />
                    </button>
                </div>
                <div
                    className={`flex justify-between space-x-3 rounded-lg p-2 ml-4 ${darkMode ? "bg-[#1C1C1E]" : "bg-white"}`}
                >
                    <img
                        src={profile_pic}
                        alt="Profile Picture"
                        className="w-16 aspect-square rounded-full mx-auto object-cover"
                    />
                    <div>
                        <p className="font-bold text-lg">Charlotte</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-[#7F7F7F]"}`}>Full-Stack Developer</p>
                    </div>
                </div>
                {/* Content */}
                <div className="pl-4 pt-7">
                    {leftSection.map((section, index) => (
                        <div key={index} className="mb-4">
                            <div className={`rounded-md ${darkMode ? "bg-[#1C1C1E]" : "bg-white"}`}>
                                {section.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between py-[13px] px-2 ${index === section.items.length - 1 ? "" :
                                            (darkMode ? "border-b border-[#3E3D3D]" : "border-b border-[#E1E1E1]")} 
                                            ${item.current ? (darkMode ? "bg-[#3A3A3C]" : "bg-[#E1E1E1]") : ""} rounded-t-md`}
                                    >
                                    <div className="flex items-center space-x-2">
                                            <span>{item.icon}</span>
                                            <span>{item.name}</span>
                                        </div>
                                        {item.toggle ? (
                                            <button
                                                onClick={() => handleToggle(item.name)}
                                                className={`relative w-12 h-6 flex items-center rounded-full p-1 transition ${
                                                    toggles[item.name]
                                                        ? "bg-green-500"
                                                        : darkMode
                                                            ? "bg-neutral-500"
                                                            : "bg-[#E9E9EA]"
                                                }`}
                                            >
                                                <div
                                                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                                                        toggles[item.name] ? "translate-x-6" : "translate-x-0"
                                                    }`}
                                                />
                                            </button>
                                        ) : item.value ? (
                                            <div className="text-sm text-gray-400">{item.value}</div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
            <div className="flex-1 ml-2 mr-4 mt-4">
                <div className="flex items-center space-x-14 mb-1">
                    <p className="text-blue-500">
                        <span className="text-4xl align-middle">&lt;</span> Back
                    </p>
                    <p className="text-lg font-semibold">About</p>
                </div>
                {rightSection.map((section, index) => (
                    <div key={index} className="mb-4">
                        <div className={`rounded-md ${darkMode ? "bg-[#1C1C1E]" : "bg-white"}`}>
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between py-[11px] px-2 ${index === section.items.length - 1 ? "" : (darkMode ? "border-b border-[#3E3D3D]" : "border-b border-[#E1E1E1]") }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                    {item.value ? (
                                        <div className="text-sm text-gray-400">{item.value}</div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsApp;