import React from "react";
import { dancing, dumbbell, padel, surfing, skis, iceskates } from "../../assets";

const SportsHobbies = [
    {
        title: "Gym",
        description: "A consistent gym routine helps me stay fit and strong. I enjoy weightlifting, running, and swimming.",
        img: dumbbell,
    },
    {
        title: "Ballroom Dancing",
        description: "Ballroom dancing combines elegance and discipline. I enjoy the artistry and rhthym.",
        img: dancing,
    },
    {
        title: "Pádel",
        description: "Pádel is a fun and social sport. The fast pace and teamwork make it a great way to stay active.",
        img: padel,
    },
];

const SeasonalSports = [
    {
        title: "Skiing",
        description: "Skiing is a thrilling winter sport. The speed and adrenaline rush make it a favorite winter activity.",
        img: skis,
    },
    {
        title: "Surfing",
        description: "Surfing is an exhilarating sport. Catching waves and being in the ocean is a great experience.",
        img: surfing,
    },
    {
        title: "Ice Skating",
        description: "Ice skating is a fun winter sport. I enjoy the balance and precision it requires.",
        img: iceskates,
    },
];

const FavoriteRecipes = [
    {
        title: "Sweet potato bowl",
        description: "A nutritious meal made with roasted veggies and sweet potatoes, eggs, chickpeas, some greens and a tangy dressing.",
        img: "https://myfoodbook.com.au/sites/default/files/styles/card_molo/public/recipe_photo/Barley-bowl-with-soft-egg_0606.jpg",
    },
    {
        title: "Käsespätzle",
        description: "A traditional German dish made with egg noodles, lots of cheese, and caramelized onions. Comfort food at its best!",
        img: "https://ich-liebe-kaese.at/fileadmin/_processed_/f/2/csm_rezept-allgaeuer-kaesespaetzle-milkana-kaese-brotzeit-0465_1ad815465b.jpg",
    },
    {
        title: "Chia Pudding",
        description: "Chia seeds, milk, protein powder, nuts, fresh berries, and a drizzle of honey. A healthy breakfast option!",
        img: "https://www.eatingbirdfood.com/wp-content/uploads/2023/12/chia-pudding-angled-500x500.jpg",
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
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Favorite Recipes</h2>
                <div className="space-y-8">
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
