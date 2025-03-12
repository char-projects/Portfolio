import React from "react";

const steamGames = [
    {
        title: "The Witcher 3",
        genre: "Action RPG",
        description: "An open-world action RPG that explores a dark and deep fantasy universe.",
        image: "https://store.steampowered.com/public/shared/images/header_1.png",
    },
    {
        title: "Stardew Valley",
        genre: "Simulation",
        description: "A farming simulator with RPG elements. Build your farm, interact with the community, and explore.",
        image: "https://store.steampowered.com/public/shared/images/header_2.png",
    },
    {
        title: "DOOM Eternal",
        genre: "First-Person Shooter",
        description: "Fast-paced action with demon-slaying gameplay and intense combat mechanics.",
        image: "https://store.steampowered.com/public/shared/images/header_3.png",
    },
];

const futureGames = [
    {
        title: "Elder Scrolls VI",
        genre: "Action RPG",
        description: "The next installment of the Elder Scrolls franchise, focusing on exploring new regions and storylines.",
    },
    {
        title: "Cyberpunk 2077: Phantom Liberty",
        genre: "RPG",
        description: "The expansion for Cyberpunk 2077, bringing more quests, storylines, and enhancements to the dystopian world.",
    },
    {
        title: "Hogwarts Legacy",
        genre: "Action RPG",
        description: "An open-world action RPG set in the Harry Potter universe, allowing players to explore Hogwarts and its magical world.",
    },
];

// Two scroll bars????
const SteamApp = () => {
    return (
        <div className="h-screen bg-gray-900 text-white overflow-y-auto">
            {/* Steam Header */}
            <div className="flex items-center justify-between p-4 bg-steamDarkGray">
                <div className="text-2xl font-bold">Steam</div>
                <div className="flex space-x-6">
                    <button>Store</button>
                    <button>Library</button>
                    <button>Community</button>
                    <button>Friends</button>
                </div>
            </div>

            {/* Games Section */}
            <div className="p-4 flex flex-col space-y-6">
                <h2 className="text-xl font-semibold">Games I Love</h2>
                <div className="grid grid-cols-3 gap-6">
                    {steamGames.map((game, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-md">
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="mt-4 text-lg font-semibold">{game.title}</h3>
                            <p className="text-sm text-gray-400">{game.genre}</p>
                            <p className="mt-2 text-sm">{game.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 flex flex-col space-y-6">
                <h2 className="text-xl font-semibold">Games I Want to Code in the Future</h2>
                <div className="grid grid-cols-3 gap-6">
                    {futureGames.map((game, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-md">
                            <div className="bg-gray-700 h-40 rounded-md" />
                            <h3 className="mt-4 text-lg font-semibold">{game.title}</h3>
                            <p className="text-sm text-gray-400">{game.genre}</p>
                            <p className="mt-2 text-sm">{game.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SteamApp;
