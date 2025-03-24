import React, { useState } from 'react';
import {
    appletv,
    behindhereyes, blackmirror,
    friends, gilmoregirls,
    got, himym,
    houseofcards, laisla,
    modernfamily,
    prisonbreak, searchicon, tabbar,
    tbbt,
    theoffice
} from "../../assets/index.js";

const movieData = [
    {
        title: "Game of Thrones",
        description: "Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. But in a land where seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, a forgotten evil has returned.",
        img: got,
        genre: "Fantasy - 2011",
        type: "recommended",
    },
    {
        title: "House of Cards",
        description: "Betrayed by the White House, Congressman Frank Underwood embarks on a ruthless rise to power. Blackmail, seduction and ambition are his weapons.",
        img: houseofcards,
        genre: "Drama - 2013",
        type: "recommended",
    },
    {
        title: "Behind her eyes",
        description: "A single mother enters a world of twisted mind games when she begins an affair with her psychiatrist boss while secretly befriending his mysterious wife.",
        img: behindhereyes,
        genre: "Thriller - 2021",
        type: "recommended",
    },
    {
        title: "Prison Break",
        description: "When his brother is wrongly convicted of murder, a structural engineer resolves to bust his brother out of the notorious Fox River State Penitentiary.",
        img: prisonbreak,
        genre: "Drama - 2005",
        type: "recommended",
    },
    {
        title: "Modern Family",
        description: "Modern Family is a comedy series that views three different families through the lens of a documentary filmmaker and his crew. Jay Pritchett is the patriarch of this complicated, messy, and loving modern family.",
        img: modernfamily,
        genre: "Comedy - 2009",
        type: "sitcom",
    },
    {
        title: "The Big Bang Theory",
        description: "Leonard and Sheldon are brilliant physicists – geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life.",
        img: tbbt,
        genre: "Comedy - 2007",
        type: "sitcom",
    },
    {
        title: "The Office",
        description: "Led by the comically incompetent Michael Scott, employees plod along at Dunder Mifflin's Scranton-based paper supply branch, where foibles, feuds and office romances unfold through the lens of an ever-present documentary crew.",
        img: theoffice,
        genre: "Comedy - 2005",
        type: "sitcom",
    },
    {
        title: "Friends",
        description: "Three young men and three young women - of the BFF kind - live in the same apartment complex and face life and love in New York.",
        img: friends,
        genre: "Comedy - 1994",
        type: "sitcom",
    },
    {
        title: "Gilmore Girls",
        description: "In Stars Hollow, Connecticut, we meet 32-year-old Lorelai Gilmore and her teenage daughter, Rory. When Rory's attention turns from dreams of Harvard to boys and self-reliance, Lorelai notices more of her own rebellious youth in Rory.",
        img: gilmoregirls,
        genre: "Comedy - 2000",
        type: "sitcom",
    },
    {
        title: "How I met your mother",
        description: "Ted's epic search for his soul mate is told largely through flashbacks, as an adult Ted recounts to his kids how he met their mother.\n",
        img: himym,
        genre: "Comedy - 2005",
        type: "sitcom",
    },
];

const continueWatchingData = [
    {
        title: "La isla de las tentaciones",
        description: "Cinco parejas ponen a prueba su relación conviviendo por separado en unas lujosas villas con un grupo de solteros/as en busca del amor. ¿Serán capaces de resistir a la tentación?",
        img: laisla,
        genre: "Reality - 2025",
        type: "tvshow",
    },
    {
        title: "Black Mirror",
        description: "An anthology series that explores a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        img: blackmirror,
        genre: "Sci-Fi - 2011",
        type: "tvshow",
    }
];

const AppleTV = () => {
    const recommended = movieData.filter(item => item.type === "recommended");
    const sitcom = movieData.filter(item => item.type === "sitcom");
    const continueWatching = continueWatchingData.filter(item => item.type === "movie" || item.type === "tvshow");
    const [selectedShow, setSelectedShow] = useState(null);
    const handleClick = (title) => {
        setSelectedShow(selectedShow === title ? null : title);
    };

    return (
        <div className="bg-black text-white font-sans pt-12">
            {/* Top Navigation Bar */}
            <div className="flex justify-between items-center px-4 py-0.5 bg-gray-800 mx-3 rounded-full">
                <button>
                    <img
                        src={tabbar}
                        alt="Tab Bar"
                        className="w-6 h-auto"
                    />
                </button>
                <button className="text-white">Home</button>
                <button className="bg-gray-700 p-3 rounded-3xl">
                    <img
                        src={appletv}
                        alt="Apple TV Logo"
                        className="w-10 h-auto"
                    />
                </button>
                <button className="text-white">MLS</button>
                <button className="text-white">Store</button>
                <button>
                    <img
                        src={searchicon}
                        alt="Search Icon"
                        className="w-5 h-auto"
                    />
                </button>
            </div>

            {/* Main Content */}
            <div className="px-6 py-4 space-y-12">
                {/* Recommended for You */}
                <div className="space-y-4 mt-4">
                    <h2 className="text-2xl font-semibold">Recommended for You</h2>
                    <div className="flex overflow-x-scroll max-w-full whitespace-nowrap space-x-4">
                        {recommended.map((show) => (
                            <div
                                key={show.title}
                                className="relative w-44 h-64 rounded-lg cursor-pointer flex-shrink-0 bg-gray-800"
                                onClick={() => handleClick(show.title)}
                            >
                                {selectedShow === show.title ? (
                                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                                        <button
                                            className="absolute top-2 right-2 text-xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedShow(null);
                                            }}
                                        >
                                            ✕
                                        </button>
                                        <p className="text-sm text-center whitespace-pre-wrap">{show.description}</p>
                                    </div>
                                ) : (
                                    <>
                                    <img
                                        src={show.img}
                                        alt={show.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                        <h3 className="text-lg font-semibold">{show.title}</h3>
                                        <p className="text-sm">{show.genre}</p>
                                    </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sitcoms */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Sitcoms</h2>
                    <div className="flex overflow-x-scroll max-w-full space-x-4">
                        {sitcom.map((sitcom, index) => (
                            <div
                                key={sitcom.title}
                                className="relative w-44 h-64 rounded-lg cursor-pointer flex-shrink-0 bg-gray-800"
                                onClick={() => handleClick(sitcom.title)}
                            >
                                {selectedShow === sitcom.title ? (
                                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                                        <button
                                            className="absolute top-2 right-2 text-xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedShow(null);
                                            }}
                                        >
                                            ✕
                                        </button>
                                        <p className="text-sm text-center whitespace-pre-wrap">{sitcom.description}</p>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={sitcom.img}
                                            alt={sitcom.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                            <h3 className="text-lg font-semibold">{sitcom.title}</h3>
                                            <p className="text-sm">{sitcom.genre}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Continue Watching */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Continue Watching</h2>
                    <div className="flex space-x-6">
                        {continueWatching.map((item) => (
                            <div
                                key={item.title}
                                className="relative w-44 h-64 rounded-lg cursor-pointer flex-shrink-0 bg-gray-800"
                                onClick={() => handleClick(item.title)}
                            >
                                {selectedShow === item.title ? (
                                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                                        <button
                                            className="absolute top-2 right-2 text-xl"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedShow(null);
                                            }}
                                        >
                                            ✕
                                        </button>
                                        <p className="text-sm text-center whitespace-pre-wrap">{item.description}</p>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-sm">{item.genre}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppleTV;
