import React from "react";
import { Hash, Mic, Headphones, Settings, Plus, ChevronDown } from "lucide-react";

const DiscordClone = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white justify-center items-center">
            <div className="w-[450px] h-[900px] flex bg-gray-850 rounded-lg shadow-lg">
                {/* Server List Sidebar */}
                <div className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-5 flex-grow justify-between">
                    <div>
                        <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center text-xl font-bold">
                            C
                        </div>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-xl font-bold">
                            42
                        </div>
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl hover:bg-blue-500 transition">
                            +
                        </div>
                    </div>

                    {/* User Avatar ("U") at the bottom of the server list */}
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold">
                        U
                    </div>
                </div>

                {/* Server Channels Sidebar */}
                <div className="w-60 bg-gray-850 p-3 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-bold">My Server</h2>
                        <ChevronDown className="w-4 h-4" />
                    </div>

                    <div className="text-gray-400 text-xs font-semibold uppercase mb-2">Text Channels</div>
                    <div className="space-y-1">
                        <button className="flex items-center px-2 py-1 w-full rounded hover:bg-gray-700">
                            <Hash className="w-4 h-4 mr-2" />
                            general
                        </button>
                        <button className="flex items-center px-2 py-1 w-full rounded hover:bg-gray-700">
                            <Hash className="w-4 h-4 mr-2" />
                            memes
                        </button>
                        <button className="flex items-center px-2 py-1 w-full rounded hover:bg-gray-700">
                            <Hash className="w-4 h-4 mr-2" />
                            coding
                        </button>
                    </div>

                    {/* User Info & Controls at the bottom of the channel section */}
                    <div className="mt-auto flex items-center mb-2">
                        <div className="flex space-x-1">
                            <div className="text-sm font-bold">User123</div>
                            <div className="text-xs text-gray-400">#1234</div>
                        </div>
                    </div>
                    {/* Controls: Mic, Headphones, Settings */}
                    <div className="flex space-x-1">
                        <Mic className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                        <Headphones className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                        <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-gray-700">
                    {/* Chat Header */}
                    <div className="bg-gray-750 pl-3 py-2 flex items-center border-b border-gray-600">
                        <Hash className="w-5 h-5 mr-2 text-gray-400" />
                        <h2 className="text-sm font-semibold">general</h2>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 pt-3 pl-3 text-sm">
                        <div className="flex items-start mb-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold">U</div>
                            <div className="ml-2">
                                <div className="flex items-center space-x-1">
                                    <span className="font-bold">Charlotte123</span>
                                    <span className="text-xs text-gray-400">Today at 12:34 PM</span>
                                </div>
                                <p>Hello! Welcome to my Discord server :)</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-lg font-bold">B</div>
                            <div className="ml-2">
                                <div className="flex items-center space-x-1">
                                    <span className="font-bold">Bot</span>
                                    <span className="text-xs text-gray-400">Today at 12:35 PM</span>
                                </div>
                                <p>You can ask me anything!</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="bg-gray-750 pl-2 pb-2 flex items-center">
                        <input
                            type="text"
                            placeholder="Message #general"
                            className="flex-1 bg-gray-800 pl-3 py-1 rounded-md focus:outline-none text-white text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscordClone;
