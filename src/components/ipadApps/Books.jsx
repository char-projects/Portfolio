import React, { useState } from "react";

const Books = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const books = [
        {
            title: "Crime and Punishment",
            author: "F. Dostoevsky",
            category: "Haunting Masterpieces",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Publication/v4/62/69/b2/6269b227-8903-9dcf-3b4a-e419853472bf/crime_and_punishment.jpg/276x0w.webp",
        },
        {
            title: "Harry Potter i kamień filozoficzny",
            author: "J.K. Rowling",
            category: "Language Learning",
            cover: "https://www.mediarodzina.pl/mrcore/uploads/2018/12/harry_potter_i_kamien_filozoficzny_ilustrowana.jpg",
        },
        {
            title: "Harry Potter e a cámara dos segredos",
            author: "J.K. Rowling",
            category: "Language Learning",
            cover: "https://static.serlogal.com/imagenes_big/9789722/978972232569.JPG",
        },
        {
            title: "Гарри Поттер и узник Азкабана",
            author: "Дж. К. Роулинг",
            category: "Language Learning",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGD0hRuZ04ywLED31nCJRW9VhI-T6i7N5TA&s",
        },
        {
            title: "Harry Potter and the goblet of fire",
            author: "J.K. Rowling",
            category: "Language Learning",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiINaPAXoGkCP1Y6bNsYwbErUM-WW9NEZ0aXrOBP30AF1EYpX1qw70rNkt56CL4YWSD30&usqp=CAU",
        },
        {
            title: "Harry Potter y la orden del fénix",
            author: "J.K. Rowling",
            category: "Language Learning",
            cover: "https://lalibretadenani.com/wp-content/uploads/2022/03/hp5.jpg?w=816",
        },
        {
            title: "Harry Potter und der Halbblutprinz",
            author: "J.K. Rowling",
            category: "Language Learning",
            cover: "https://m.media-amazon.com/images/I/8159azNHJ1L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            title: "Tender is the Flesh",
            author: "A. Bazterrica",
            category: "Haunting Masterpieces",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Publication123/v4/f6/1d/0a/f61d0a1e-655f-08b7-3b76-388ca83ac480/9781982151300.jpg/276x0w.webp",
        },
        {
            title: "Bastard Out of Carolina",
            author: "D. Allison",
            category: "Haunting Masterpieces",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Publication111/v4/d5/4e/ed/d54eedec-e424-e830-f40a-a70bbe03dfee/9781101007174.jpg/276x0w.webp",
        },
        {
            title: "Java Pro- grammierung für Anfänger",
            author: "D. Lorig",
            category: "Currently Reading",
            cover: "https://m.media-amazon.com/images/I/61SOdRIg0EL._SY385_.jpg",
        },
        {
            title: "Tóngdào Chinesisch",
            author: "C. C. Buchner",
            category: "Currently Reading",
            cover: "https://res.cloudinary.com/pim-red/image/upload/q_auto,f_auto,w_600/v1639480364/ccbuchner/titles/covers/c08000.jpg",
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            category: "Currently Reading",
            cover: "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/fd/d8/1d/fdd81dbe-2977-55f3-b77a-6b0f29254406/9781407021010.jpg/276x0w.webp",
        },
    ];

    const categories = Array.from(new Set(books.map((book) => book.category)));

    const handleGoalClick = () => {
        setIsModalOpen(true); // Open the modal when the ">" button is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    if (isModalOpen) {
        return (
            <div className="bg-black text-white flex flex-col items-center">
                <button
                    className="bg-gray-400 z-10 text-black py-1 px-3 m-3 rounded-full fixed left-0"
                    onClick={handleCloseModal}
                > x </button>
                <svg
                    className="absolute left-1/2 -translate-x-1/2 -top-[10%] -translate-y-1/2 w-max h-[750px]"
                    width="70%"
                    height="150%"
                    viewBox="-10 0 120 180"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M -5,180 A 55,55 0 0 1 105,180"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1.1"
                    />
                </svg>
                <h2 className="text-[90px] mt-24 -mb-6">0:00</h2>
                <p className="mb-24">of your 5-minute goal</p>
                <hr className="w-[90%] border-gray-600" />
                <h3 className="text-2xl font-semibold mt-4">Today's Reading</h3>
                <h1 className="text-xl text-blue-400">5 minutes to go</h1>
                <p className="mt-4">You're on your way to reaching your daily goal.</p>
                <button className="bg-gray-600 py-3 px-14 mt-44 rounded-full">
                    SHARE
                </button>
                <button className="py-2 px-4 mt-2 rounded-full"
                onClick={() => alert("Congratulations! You found an easter egg!\nHats off for wanting to read more :)")}>
                    ADJUST GOAL
                </button>
            </div>
        );
    }

    return (
        <div className="bg-black shadow-lg pt-11 pb-4">
            <div className="bg-black pt-1">
                <div className="flex justify-between items-center pl-1 pr-3 py-1 bg-gray-500 rounded-full text-[15px] mx-9">
                    <button className="bg-gray-400 px-2 py-1 rounded-3xl">Home</button>
                    <button>Library</button>
                    <button>Book Store</button>
                    <button>Audiobook Store</button>
                    <button>
                        <img
                            src="/src/assets/ipad/searchicon.png"
                            alt="Search Icon"
                            className="w-5 h-auto"
                        />
                    </button>
                </div>
            </div>

            {/* Home Title */}
            <div className="bg-black pt-5 pl-3 text-white">
                <h1 className="text-4xl font-bold">Home</h1>
            </div>

             {/* Category Rows */}
            <div className="category-rows overflow-x-auto mt-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-row pl-3 mb-0"
                        style={{ background: "linear-gradient(to bottom, #333333, #000000)" }}
                    >
                        <h2 className="text-xl font-semibold text-white inline-block mr-2">{category}</h2>
                        <span className="text-lightgray pt-2 text-xl inline-block"> &gt;</span>

                        {/* Books in this Category */}
                        <div className="book-shelf flex overflow-x-auto gap-4 py-4">
                            {books
                                .filter((book) => book.category === category)
                                .map((book, idx) => (
                                    <div
                                        key={idx}
                                        className="book bg-white rounded-lg shadow-lg hover:scale-105 transform transition-all flex-shrink-0 w-[156px]"
                                    >
                                        <img
                                            src={book.cover}
                                            alt={book.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <div className="book-info p-4">
                                            <h3 className="text-lg font-bold text-gray-800 pb-2">{book.title}</h3>
                                            <p className="text-sm text-gray-600">{book.author}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Reading Goals */}
            <div className="relative bg-black flex flex-col items-center">
                {/* SVG Half-Circle Arch */}
                <svg
                    className="absolute left-1/2 -translate-x-1/2 -top-[15%] -translate-y-1/2 w-max h-[750px]"
                    width="70%"
                    height="150%"
                    viewBox="-10 0 120 180"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M -5,180 A 55,55 0 0 1 105,180"
                        fill="none"
                        stroke="gray"
                        strokeWidth="1.1"
                    />
                </svg>
                {/* Content */}
                <div className="reading-goals text-center mt-6 relative">
                    <h2 className="text-2xl font-semibold text-white">Reading Goals</h2>
                    <p className="text-xs text-gray-400">
                        Find a great book, set a goal and make reading a daily habit.
                    </p>
                    <h2 className="text-xl font-semibold text-white mt-16">Today's Reading</h2>
                    <h1 className="text-7xl text-white">0:00</h1>
                    <div className="flex justify-center items-center">
                        <p className="text-sm text-white">of your 5-minute goal</p>
                        <button className="text-sm text-gray-400 ml-2"
                            onClick={handleGoalClick}>
                            &gt;
                        </button>
                    </div>
                    <div className="mt-7">
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-full text-sm">
                            Explore the Book Store
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer with Black Background and Terms Button */}
            <div className="bg-black pt-4 mt-0">
                <div className="border-t border-gray-500 m-3"></div>
                <button className="text-gray-400 text-xs pl-3">
                    Terms and Conditions &gt;
                </button>
            </div>
        </div>
    );
};

export default Books;
