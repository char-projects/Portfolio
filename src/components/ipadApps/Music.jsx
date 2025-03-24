import React, { useState, useEffect, useRef } from "react";
import {
    applemusic,
    california,
    concerto,
    dopamine,
    mama,
    nuvole, riverflows,
    shot,
    taumichauf,
    toomuch
} from "../../assets/index.js";
import { IoIosPlay, IoIosPause, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

const favoriteSongs = [
    {
        title: "tau mich auf",
        artist: "Zartmann",
        coverArt: taumichauf,
    },
    {
        title: "Mama",
        artist: "My Chemical Romance",
        coverArt: mama,
    },
    {
        title: "Too much",
        artist: "Dove Cameron",
        coverArt: toomuch,
    },
];

const favoriteAlbums = [
    {
        title: "Dopamine",
        artist: "Madelline",
        coverArt: dopamine,
    },
    {
        title: "SHOT",
        artist: "No Maka, ILBF",
        coverArt: shot,
    },
    {
        title: "California",
        artist: "White 2115",
        coverArt: california,
    },
];

const classical = [
    {
        title: "Nuvole Bianche",
        artist: "Ludovico Einaudi",
        coverArt: nuvole,
    },
    {
        title: "Concerto No. 4 in F Minor",
        artist: "Antonio Vivaldi",
        coverArt: concerto,
    },
    {
        title: "River Flows in You",
        artist: "Yiruma",
        coverArt: riverflows,
    },
];

const favoriteArtists = [
    "YUNGBLUD",
    "Die Ärzte",
    "Bad Bunny",
    "Pidżama Porno",
    "Linkin Park",
];

const favoriteGenres = ["Rock", "Pop", "Indie", "Techno", "German Rap"];

const MusicApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const footerRef = useRef(null);
    const [, setFooterHeight] = useState(0);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const handleSongClick = (song) => {
        setCurrentSong(song);
    };

    useEffect(() => {
        // Update the footer height when the component mounts
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className="bg-gray-700 text-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-red-500 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4 mt-8">
                    <img src={applemusic} alt="Apple Music" className="h-8 w-auto" />
                </div>
                <div className="flex items-center space-x-6 text-lg mt-10">
                    <button>Library</button>
                    <button>Browse</button>
                    <button>Radio</button>
                    <button>Search</button>
                </div>
            </div>

            {/* Scrollable content container */}
            <div className="flex-grow px-4 py-7 overflow-y-auto">

                <div className="space-y-8">
                    {/* Favorite Songs */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2">On Repeat</h3>
                        <div className="flex space-x-3">
                            {favoriteSongs.map((song, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 rounded-lg p-2 w-40 flex flex-col items-center"
                                    onClick={() => handleSongClick(song)}
                                >
                                    <img
                                        src={song.coverArt}
                                        alt={song.title}
                                        className="w-full h-28 object-cover rounded-lg mb-3"
                                    />
                                    <p className="text-white text-sm text-center">{song.title}</p>
                                    <p className="text-gray-400 text-xs text-center">{song.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Classical Songs */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2">Classical Music</h3>
                        <div className="flex space-x-3">
                            {classical.map((classic, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 rounded-lg p-2 w-40 flex flex-col items-center"
                                    onClick={() => handleSongClick(classic)}
                                >
                                    <img
                                        src={classic.coverArt}
                                        alt={classic.title}
                                        className="w-full h-28 object-cover rounded-lg mb-3"
                                    />
                                    <p className="text-white text-sm text-center">{classic.title}</p>
                                    <p className="text-gray-400 text-xs text-center">{classic.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Favorite Albums */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2">Different Languages</h3>
                        <div className="flex space-x-3">
                            {favoriteAlbums.map((album, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 rounded-lg p-2 w-40 flex flex-col items-center"
                                    onClick={() => handleSongClick(album)}
                                >
                                    <img
                                        src={album.coverArt}
                                        alt={album.title}
                                        className="w-full h-28 object-cover rounded-lg mb-3"
                                    />
                                    <p className="text-white text-sm text-center">{album.title}</p>
                                    <p className="text-gray-400 text-xs text-center">{album.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Favorite Artists */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2">Favorite Artists</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {favoriteArtists.map((artist, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 p-4 rounded-lg text-center"
                                >
                                    <p className="text-white text-sm">{artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Favorite Genres */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-2">Favorite Genres</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {favoriteGenres.map((genre, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-700 p-4 rounded-lg text-center"
                                >
                                    <p className="text-white text-sm">{genre}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Player Controls */}
            <div
                className="bg-red-500  p-6 flex justify-between items-center text-lg sticky bottom-0 left-0 right-0"
                ref={footerRef}
            >
                {/* Now Playing Info */}
                <div className="flex items-center space-x-4">
                    {currentSong ? (
                        <>
                            <img
                                src={currentSong.coverArt}
                                alt={currentSong.title}
                                className="w-14 h-14 rounded-lg object-cover"
                            />
                            <div className="flex flex-col">
                                <p className="text-sm text-white">{currentSong.title}</p>
                                <p className="text-sm text-white">{currentSong.artist}</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-white">No song selected</p>
                    )}
                </div>

                {/* Player Controls */}
                <div className="flex items-center space-x-8 text-3xl">
                    <IoIosSkipBackward className="cursor-pointer hover:text-white" />
                    {isPlaying ? (
                        <IoIosPause
                            className="cursor-pointer hover:text-white"
                            onClick={togglePlay}
                        />
                    ) : (
                        <IoIosPlay
                            className="cursor-pointer hover:text-white"
                            onClick={togglePlay}
                        />
                    )}
                    <IoIosSkipForward className="cursor-pointer hover:text-white" />
                </div>

                {/* Volume Control */}
                <div className="text-lg">🔊</div>
            </div>
        </div>
    );
};

export default MusicApp;
