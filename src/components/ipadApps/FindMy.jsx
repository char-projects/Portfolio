import React, { useState } from "react";
import iPhone from "/src/assets/ipad/phone.png";

// Download all the pictures and put them in the assets folder!!!!!
const devices = [
    {
        name: "Charlotte's iPad",
        status: "Online",
        location: "Málaga, Spain",
        lastSeen: "5 minutes ago",
        icon: "https://statici.icloud.com/fmipmobile/deviceImages-9.0/iPad/iPad13,1-1-1-0/online-sourcelist__2x.png",
    },
    {
        name: "Charlotte's iPhone",
        status: "Offline",
        location: "Not Available",
        lastSeen: "Last seen 2 days ago",
        icon: iPhone,
    },
    {
        name: "Charlotte's AirPods Pro",
        status: "Online",
        location: "Kano, Nigeria",
        lastSeen: "30 minutes ago",
        icon: "https://statici.icloud.com/fmipmobile/deviceImages-9.0/Accessory/AirPods_8228-0/offline-sourcelist__2x.png",
    },
];

const FindMyDevice = () => {
    const [selectedDevice, setSelectedDevice] = useState(null);

    // Function to select a device
    const handleDeviceSelect = (device) => {
        setSelectedDevice(device);
    };

    return (
        <div className="h-screen bg-gray-900 text-white overflow-y-auto">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between p-4 bg-gray-800">
                <div className="text-2xl font-bold">Find My Device</div>
            </div>

            {/* Map */}
            <div className="relative">
                <div className="p-6">
                    <iframe
                        title="Málaga Map"
                        className="w-full h-80 border rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51292.93820406744!2d-4.5!3d36.72126197996244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79c1f8850d9%3A0x7b9c2a2c0742d9e7!2sM%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2ses!4v1614123456789"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Device List */}
            <div className="p-4">
                <div className="header flex items-center justify-between mb-4">
                    <h1 className="text-lg font-semibold">Devices</h1>
                    <button className="text-white font-semibold text-lg px-3">+</button>
                </div>
                <div className="space-y-4">
                    {devices.map((device, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-800 rounded-md cursor-pointer"
                            onClick={() => handleDeviceSelect(device)}
                        >
                            <div className="flex items-center space-x-3">
                                <img src={device.icon} alt={device.name} className="w-8 h-auto" />
                                <div>
                                    <div className="text-white font-semibold">{device.name}</div>
                                    <div className="text-sm text-gray-400">{device.location}</div>
                                </div>
                            </div>
                            <div
                                className={`text-sm ${
                                    device.status === "Online" ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {device.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Device Details */}
            {selectedDevice && (
                <div className="fixed bottom-0 w-[87%] bg-gray-800 p-4 py-12">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-white">{selectedDevice.name}</div>
                        <button
                            className="text-xl bg-gray-500 px-2 py-1 rounded-md"
                            onClick={() => setSelectedDevice(null)}
                        >
                            X
                        </button>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">Last Seen: {selectedDevice.lastSeen}</div>
                    <div className="mt-2 text-sm text-gray-400">Location: {selectedDevice.location}</div>
                    <div className="mt-4 space-x-4">
                        <button className="bg-blue-600 px-4 py-2 rounded-md">Play Sound</button>
                        <button className="bg-yellow-600 px-4 py-2 rounded-md">Mark as Lost</button>
                        <button className="bg-red-600 px-4 py-2 rounded-md">Erase Device</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindMyDevice;
