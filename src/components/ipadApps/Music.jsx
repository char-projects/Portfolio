import React from "react";

const songsData = [
    {
        img: "",
        title: "Heavy Is the Crown",
        artist: "Linkin Park",
    },
    {
        img: "",
        title: "Song Title 2",
        artist: "Artist Name 2",
    },
];

const genreData = ["Pop", "Rock", "Techno", "Classical"];

const artistsData = [
    { name: "Artist 1", image: "link-to-artist-image1.jpg" },
    { name: "Artist 2", image: "link-to-artist-image2.jpg" },
];

const onRepeat = [
    {
        img: "",
        title: "Angels Sippen Mashup",
        artist: "Der Heimer",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSun_9I235o5-VjoBrfUrTVkuHRTSfZ3WA32A&s",
        title: "Disease",
        artist: "Lady Gaga",
    },
];

const Music = () => {
    const songs = songsData.filter(item => item.type === "song");
    const genres = genreData.filter(item => item.type === "genre");
    const artists = artistsData.filter(item => item.type === "artist");
    const repeat = onRepeat.filter(item => item.type === "repeat");

    return (
        <div className="bg-black text-white font-sans min-h-screen py-12">
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center px-4 py-0.5 bg-gray-800 rounded-full mx-3">
                <button>
                    <img
                        src="/src/assets/ipad/tabbar.svg"
                        alt="Tab Bar"
                        className="w-6 h-auto"
                    />
                </button>
                <button className="text-white">Home</button>
                <button className="bg-gray-700 p-3 rounded-3xl">
                    <img
                        src="/src/assets/ipad/appletv.png"
                        alt="Apple TV Logo"
                        className="w-10 h-auto"
                    />
                </button>
                <button className="text-white">Radio</button>
                <button className="text-white">Library</button>
                <button>
                    <img
                        src="/src/assets/ipad/searchicon.png"
                        alt="Search Icon"
                        className="w-5 h-auto"
                    />
                </button>
            </div>

            {/* Main Content */}
            <div className="px-6 py-4 space-y-12">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">My favorite songs</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {songs.map((songs, index) => (
                            <a href={songs.img} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={songs.img}
                                    alt={songs.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{songs.title}</h3>
                                    <p className="text-sm">{songs.artist}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">On Repeat</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {onRepeat.map((onRepeat, index) => (
                            <a href={onRepeat.link} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={onRepeat.img}
                                    alt={onRepeat.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{onRepeat.title}</h3>
                                    <p className="text-sm">{onRepeat.artist}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">My favorite artists</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {artists.map((artists, index) => (
                            <a href={artists.link} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={artists.img}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{artists.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;
