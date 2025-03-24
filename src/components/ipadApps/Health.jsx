import React from "react";
import {dancing, dumbbell, padel, surfing, skis, iceskates, spaetzle, chiapudding, bowl} from "../../assets";

const SportsHobbies = [
    {
        title: "Gym",
        description: "The gym helps me stay fit and strong. I enjoy weightlifting, Calisthenics, running and swimming.",
        img: dumbbell,
    },
    {
        title: "Ballroom Dancing",
        description: "I love the elegance and discipline of ballroom dancing. And obviously the ball gowns.",
        img: dancing,
    },
    {
        title: "Pádel",
        description: "Pádel is a fun sport that I learned in Spain. Like rock climbing and tennis, it's a great weekend activity.",
        img: padel,
    },
];

const SeasonalSports = [
    {
        title: "Skiing",
        description: "The speed and adrenaline rush of snowboarding and skiing make them my favorite winter sports.",
        img: skis,
    },
    {
        title: "Surfing",
        description: "Catching waves and being in the ocean is beyond comparison. My favorite spots were California & Portugal.",
        img: surfing,
    },
    {
        title: "Ice Skating",
        description: "I enjoy skating in summer and ice skating in winter. Bonus points if it's on a lake.",
        img: iceskates,
    },
];

const FavoriteRecipes = [
    {
        title: "Sweet potato bowl",
        description: "A nutritious meal made with roasted veggies and sweet potatoes, eggs, chickpeas, some greens and a tangy dressing.",
        img: bowl,
    },
    {
        title: "Käsespätzle",
        description: "A traditional German dish made with egg noodles, lots of cheese, and caramelized onions. Comfort food at its best!",
        img: spaetzle,
    },
    {
        title: "Chia Pudding",
        description: "Chia seeds, milk, protein powder, nuts, fresh berries, and a drizzle of honey. A healthy breakfast option!",
        img: chiapudding,
    },
];

const Health = () => {
    return (
        <div className="min-h-screen scrollbar-sm bg-[#E0E0E0] text-black font-sans p-8">
            {/* Header */}
            <div className="text-center text-4xl font-semibold mb-6">Health & Fitness</div>
            {/* Sports Hobbies Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-1">Favorite Sports</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg mb-4">Year-Round:</h3>
                        <div className="space-y-6">
                            {SportsHobbies.map((hobby, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                                    <div className="flex items-center space-x-4">
                                        <img src={hobby.img} alt={hobby.title} className="w-10 h-10 rounded-lg" />
                                        <h3 className="text-xl font-semibold">{hobby.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">{hobby.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg mb-4">Seasonal:</h3>
                        <div className="space-y-6">
                            {SeasonalSports.map((sport, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                                    <div className="flex items-center space-x-4">
                                        <img src={sport.img} alt={sport.title} className="w-10 h-10 rounded-lg" />
                                        <h3 className="text-xl font-semibold">{sport.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">{sport.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Favorite Recipes Section */}
            <div className="space-y-5">
                <h2 className="text-2xl font-semibold mb-6">Favorite Recipes</h2>
                <div className="space-y-5">
                    {FavoriteRecipes.map((recipe, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
                            <div className="flex items-center space-x-4">
                                <img src={recipe.img} alt={recipe.title} className="w-16 h-16 rounded-lg" />
                                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Health;
