import React from "react";

const Pinterest = () => {
    const photos = [
        { id: 1, url: "https://images.unsplash.com/photo-1545411201-3fe1d1eaf9fa?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fGFzc2V0aWN8ZW58MHx8fHwxNjgyNTg2Njk5&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 2, url: "https://images.unsplash.com/photo-1552875591-5da60bb0f34c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fHxhbmRyb2lkY3xlbnwwfHx8fDE2ODI1ODYxNzQ&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 3, url: "https://images.unsplash.com/photo-1622252660404-2e8d37ab0623?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8fGRhdGluZ3xlbnwwfHx8fHwxNjgyNTg2NzE0&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 4, url: "https://images.unsplash.com/photo-1610721909911-7e930fe58656?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fHNvY2lhbHxlbnwwfHx8fHwxNjgyNTg2Njg0&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 5, url: "https://images.unsplash.com/photo-1620584970852-734b4f1d3fa4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fGJpdGNhcHxlbnwwfHx8fHwxNjgyNTg2NzA4&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 6, url: "https://images.unsplash.com/photo-1601923660317-1c39bff46c7e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8fHBsYW5ldHxlbnwwfHx8fHwxNjgyNTg2NzM2&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 7, url: "https://images.unsplash.com/photo-1565828137-87292ca3f705?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fHBsYW5ldHxlbnwwfHx8fHwxNjgyNTg2NzQ0&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 8, url: "https://images.unsplash.com/photo-1555646148-e71e541f8f9b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OHx8fHBsYW5ldHxlbnwwfHx8fHwxNjgyNTg2NzYy&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 9, url: "https://images.unsplash.com/photo-1516377204-833dbe7c6182?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OXx8fGljZWR8ZW58MHx8fHwxNjgyNTg2NzQ4&ixlib=rb-1.2.1&q=80&w=400" },
        { id: 10, url: "https://images.unsplash.com/photo-1591012946140-8f243813b758?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8fGFlc3RoaWV0aWN8ZW58MHx8fHwxNjgyNTg2NzYw&ixlib=rb-1.2.1&q=80&w=400" },
    ];

    return (
        <div className="bg-black pt-5">
            {/* Navigation Bar */}
            <div className="font-bold text-white text-3xl py-1 ml-6">Pinterest</div>
            <div className="text-gray-300 text-md pb-8 ml-6">28 Pins</div>
            {/* Photo Grid */}
            <div>
                <div className="relative w-full h-full">
                    <img
                        src={'/src/assets/ipad/pinterest_1.jpg'}
                        alt="Pinterest 1"
                        className="w-full h-full object-cover transition-transform duration-300"
                    />
                </div>
                <div className="relative w-full h-full">
                    <img
                        src={'/src/assets/ipad/pinterest_2.jpeg'}
                        alt="Pinterest 2"
                        className="w-full h-full object-cover transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Pinterest;

