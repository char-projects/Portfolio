import React, { useState, useEffect, useRef } from "react";
import { applemusic } from "../../assets/index.js";
import { IoIosPlay, IoIosPause, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";

const favoriteSongs = [
    {
        title: "tau mich auf",
        artist: "Zartmann",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/a4/78/39a478ef-1f25-91cb-9a74-7de4dc572ab6/196872810677.jpg/180x180bb.webp",
    },
    {
        title: "Mama",
        artist: "My Chemical Romance",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/56/99/8a/56998a1c-efe7-fdf0-2b1d-e2da88d8df52/093624917724.jpg/180x180bb.webp",
    },
    {
        title: "Too much",
        artist: "Dove Cameron",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ac/52/f0/ac52f068-2f0e-4f8f-c848-a2a6bef2cb0c/196872912531.jpg/296x296bb.webp",
    },
];

const favoriteAlbums = [
    {
        title: "Dopamine",
        artist: "Madelline",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4b/f0/e0/4bf0e0b4-7d3b-a4b5-c575-0afec906556c/717124292470.png/296x296bb.webp",
    },
    {
        title: "SHOT",
        artist: "No Maka, ILBF",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/bb/85/77/bb857728-1b05-f2eb-5a72-0352a81cee14/22UM1IM30573.rgb.jpg/296x296bb.webp",
    },
    {
        title: "California",
        artist: "White 2115",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d1/72/d1/d172d13d-653d-e88c-7a67-cd0e7d2b518b/0000432815579.jpg/180x180bb.webp",
    },
];

const classical = [
    {
        title: "Nuvole Bianche",
        artist: "Ludovico Einaudi",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ea/44/86/ea448600-257f-670f-7f06-332e02b42abc/06UMGIM59381.rgb.jpg/180x180bb.webp",
    },
    {
        title: "Concerto No. 4 in F Minor",
        artist: "Antonio Vivaldi",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/13/5c/00/135c005f-1913-2471-6930-389de64e0bde/dj.hmhugpix.jpg/110x110bb.webp",
    },
    {
        title: "River Flows in You",
        artist: "Yiruma",
        coverArt: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/f4/9b/5ff49b8c-d0bb-3748-14f4-131edfb332ce/first_love_3000.jpg/180x180bb.webp",
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
    const [footerHeight, setFooterHeight] = useState(0);

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
