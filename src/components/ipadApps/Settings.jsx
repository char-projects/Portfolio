import React from "react";

const settingsSections = [
    {
        title: "General",
        items: [
            { name: "About", icon: "🔧" },
            { name: "Software Update", icon: "⚙️" },
            { name: "Airplane Mode", icon: "✈️" },
            { name: "Wi-Fi", icon: "📶" },
            { name: "Bluetooth", icon: "🔊" },
        ],
    },
    {
        title: "Privacy",
        items: [
            { name: "Location Services", icon: "📍" },
            { name: "Contacts", icon: "👥" },
            { name: "Camera", icon: "📷" },
            { name: "Microphone", icon: "🎙️" },
        ],
    },
    {
        title: "About Me",
        items: [
            { name: "Name", value: "Charlotte" },
            { name: "Location", value: "Málaga, Spain" },
            { name: "Occupation", value: "Full-Stack Developer" },
            { name: "Favorite Tech", value: "C, JavaScript, React" },
        ],
    },
];

const SettingsApp = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between p-4 bg-gray-800">
                <div className="text-2xl font-bold">Settings</div>
            </div>

            {/* Content */}
            <div className="p-4">
                {settingsSections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <div className="text-lg font-semibold mb-2">{section.title}</div>
                        <div className="space-y-4">
                            {section.items.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl">{item.icon}</span>
                                        <button className="text-white">{item.name}</button>
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
