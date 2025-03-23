import React from "react";

const Pinterest = () => {
    const photos = [
        { id: 1, url: "/src/assets/ipad/PinterestPics/Weights.jpeg" },
        { id: 2, url: "/src/assets/ipad/PinterestPics/Unexpected.png" },
        { id: 3, url: "/src/assets/ipad/PinterestPics/Tennis.jpeg" },
        { id: 4, url: "/src/assets/ipad/PinterestPics/Snowboard.jpeg" },
        { id: 5, url: "/src/assets/ipad/PinterestPics/Flowers.jpeg" },
        { id: 6, url: "/src/assets/ipad/PinterestPics/Cheese.jpeg" },
        { id: 7, url: "/src/assets/ipad/PinterestPics/Chess.jpeg" },
        { id: 8, url: "/src/assets/ipad/PinterestPics/Selfcare.jpeg" },
        { id: 9, url: "/src/assets/ipad/PinterestPics/Chinese.jpeg" },
        { id: 10, url: "/src/assets/ipad/PinterestPics/Puzzle.jpeg" },
        { id: 11, url: "/src/assets/ipad/PinterestPics/Commits.png" },
        { id: 12, url: "/src/assets/ipad/PinterestPics/JustAGirl.png" },
        { id: 13, url: "/src/assets/ipad/PinterestPics/GreatWave.jpeg" },
        { id: 14, url: "/src/assets/ipad/PinterestPics/Coding.jpeg" },
        { id: 15, url: "/src/assets/ipad/PinterestPics/Surfing.jpeg" },
        { id: 16, url: "/src/assets/ipad/PinterestPics/Archery.jpeg" },
        { id: 17, url: "/src/assets/ipad/PinterestPics/OldBooks.jpeg" },
        { id: 18, url: "/src/assets/ipad/PinterestPics/Strawberries.jpeg" },
        { id: 19, url: "/src/assets/ipad/PinterestPics/London.jpeg" },
        { id: 20, url: "/src/assets/ipad/PinterestPics/Dancing.jpeg" },
        { id: 21, url: "/src/assets/ipad/PinterestPics/Dog.jpeg" },
        { id: 22, url: "/src/assets/ipad/PinterestPics/Motorcycle.jpeg" },
        { id: 23, url: "/src/assets/ipad/PinterestPics/Plane.jpeg" },
        { id: 24, url: "/src/assets/ipad/PinterestPics/MusicSheets.jpeg" },
        { id: 25, url: "/src/assets/ipad/PinterestPics/Icedancer.jpeg" },
        { id: 26, url: "/src/assets/ipad/PinterestPics/Skyline.jpeg" },
        { id: 27, url: "/src/assets/ipad/PinterestPics/Girlswhocode.jpeg" },
        { id: 28, url: "/src/assets/ipad/PinterestPics/Healthy.jpeg" },
    ];

    const columns = [[], [], [], []];
    photos.forEach((photo, index) => {
        columns[index % 4].push(photo);
    });

    return (
        <div className="bg-black pt-5">
            {/* Navigation Bar */}
            <div className="font-bold text-white text-3xl py-1 ml-6">Pinterest</div>
            <div className="text-gray-300 text-md pb-7 ml-6">28 Pins</div>
            {/* Photo Grid */}
            <div className="grid grid-cols-4 gap-2">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-2">
                        {column.map((photo) => (
                            <div key={photo.id} className="relative group">
                                <img
                                    src={photo.url}
                                    alt={`Pinterest ${photo.id}`}
                                    className="w-full h-auto rounded-lg shadow-lg transition-transform
                                               group-hover:scale-150 group-hover:z-50 group-hover:absolute group-hover:top-0 group-hover:left-0"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pinterest;

