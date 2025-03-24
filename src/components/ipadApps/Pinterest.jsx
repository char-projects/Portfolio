import React from "react";
import {
    archery, bigben,
    cheese,
    chessboard,
    chinese, coding, commits, dancingcouple, dog,
    flowers, girlswhocode, greatwave, healthy, icedancer, justagirl, motorcycle, musicsheets, oldbooks, plane, puzzle,
    selfcare, skyline,
    snowboard, strawberries, surfboard,
    tennis,
    unexpected,
    weights
} from "../../assets/index.js";

const Pinterest = () => {
    const photos = [
        { id: 1, url: weights },
        { id: 2, url: flowers },
        { id: 3, url: chinese },
        { id: 4, url: greatwave },
        { id: 5, url: oldbooks },
        { id: 6, url: dog },
        { id: 7, url: icedancer },
        { id: 8, url: unexpected },
        { id: 9, url: cheese },
        { id: 10, url: puzzle },
        { id: 11, url: coding },
        { id: 12, url: strawberries },
        { id: 13, url: motorcycle },
        { id: 14, url: skyline },
        { id: 15, url: tennis },
        { id: 16, url: chessboard },
        { id: 17, url: commits },
        { id: 18, url: surfboard },
        { id: 19, url: bigben },
        { id: 20, url: plane },
        { id: 21, url: girlswhocode },
        { id: 22, url: snowboard },
        { id: 23, url: selfcare },
        { id: 24, url: justagirl },
        { id: 25, url: archery },
        { id: 26, url: dancingcouple },
        { id: 27, url: musicsheets },
        { id: 28, url: healthy },
    ];

    return (
        <div className="bg-black pt-5">
            {/* Navigation Bar */}
            <div className="font-bold text-white text-3xl py-1 ml-6">Pinterest</div>
            <div className="text-gray-300 text-md pb-7 ml-6">28 Pins</div>

            {/* Masonry Layout */}
            <div className="columns-4 gap-2 px-6">
                {photos.map((photo) => (
                    <div key={photo.id} className="mb-2">
                        <img
                            src={photo.url}
                            alt={`Pinterest ${photo.id}`}
                            className="w-max h-auto rounded-lg shadow-lg transition-transform hover:scale-150 hover:z-50"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pinterest;

