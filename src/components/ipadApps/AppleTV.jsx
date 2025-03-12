import React from 'react';

const movieData = [
    {
        title: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        img: "https://m.media-amazon.com/images/I/51oJ-w0A1RL._AC_SY679_.jpg", // Replace with movie poster
        genre: "Action",
        link: "https://www.apple.com/tv/",
        type: "movie",  // Movie
    },
    {
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        img: "https://m.media-amazon.com/images/I/51-oLg2j44L._AC_.jpg", // Replace with movie poster
        genre: "Sci-Fi",
        link: "https://www.apple.com/tv/",
        type: "movie",  // Movie
    },
    {
        title: "Stranger Things",
        description: "When a young boy disappears, his friends, family, and the local sheriff must uncover the supernatural mysteries surrounding his disappearance.",
        img: "https://m.media-amazon.com/images/I/71F1HWLu6DL._AC_SY679_.jpg", // Replace with movie poster
        genre: "Thriller",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    },
    {
        title: "The Crown",
        description: "The story of the reign of Queen Elizabeth II, from the 1950s to present day, covering major events in the British monarchy and political world.",
        img: "https://m.media-amazon.com/images/I/61ekNnoHnAL._AC_SY679_.jpg", // Replace with movie poster
        genre: "Drama",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    },
    {
        title: "Breaking Bad",
        description: "A high school chemistry teacher turned methamphetamine manufacturer faces a dark and twisted descent into the criminal underworld.",
        img: "https://m.media-amazon.com/images/I/71BB7dMhtAL._AC_SY679_.jpg", // Replace with movie poster
        genre: "Crime",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    },
];

const watchlistData = [
    {
        title: "The Witcher",
        description: "A monster hunter struggles to find his place in a world full of political intrigue and dangerous creatures.",
        img: "https://m.media-amazon.com/images/I/91r2FCM2iqL._AC_SY679_.jpg",
        genre: "Fantasy",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    },
    {
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        img: "https://m.media-amazon.com/images/I/91zzWGJvPbL._AC_SY679_.jpg",
        genre: "Sci-Fi",
        link: "https://www.apple.com/tv/",
        type: "movie",  // Movie
    }
];

const continueWatchingData = [
    {
        title: "The Mandalorian",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        img: "https://m.media-amazon.com/images/I/91nxbpxuAeL._AC_SY679_.jpg",
        genre: "Action",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    },
    {
        title: "Black Mirror",
        description: "An anthology series that explores a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        img: "https://m.media-amazon.com/images/I/81X6EFQ8+5L._AC_SY679_.jpg",
        genre: "Sci-Fi",
        link: "https://www.apple.com/tv/",
        type: "tvshow",  // TV Show
    }
];

// FIX WEIRDGAP AT THE TOP

const AppleTV = () => {
    const movies = movieData.filter(item => item.type === "movie");
    const tvShows = movieData.filter(item => item.type === "tvshow");

    const watchlist = watchlistData.filter(item => item.type === "movie" || item.type === "tvshow");
    const continueWatching = continueWatchingData.filter(item => item.type === "movie" || item.type === "tvshow");

    return (
        <div className="bg-black text-white font-sans pt-12">
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center px-4 py-0.5 bg-gray-800 mx-3 rounded-full">
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
                <button className="text-white">MLS</button>
                <button className="text-white">Store</button>
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
                {/* Section 1 - Recommended for You */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Recommended for You</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {movies.map((movie, index) => (
                            <a href={movie.link} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={movie.img}
                                    alt={movie.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                                    <p className="text-sm">{movie.genre}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Section 2 - Continue Watching */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Continue Watching</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {continueWatching.map((item, index) => (
                            <a href={item.link} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm">{item.genre}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Section 3 - Watchlist */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Watchlist</h2>
                    <div className="flex overflow-x-scroll space-x-6">
                        {watchlist.map((item, index) => (
                            <a href={item.link} key={index} className="relative w-48 h-72 rounded-lg overflow-hidden cursor-pointer">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm">{item.genre}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppleTV;
