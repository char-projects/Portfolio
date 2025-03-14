import { useState, useEffect } from "react";

const Duolingo = () => {
    const [streak, setStreak] = useState(() => {
        const storedStreak = localStorage.getItem("duolingoStreak");
        return storedStreak ? parseInt(storedStreak) : 83;
    });
    useEffect(() => {
        const today = new Date().toDateString(); // Normalize to day precision
        const lastUpdated = localStorage.getItem("duolingoLastUpdated");
        if (lastUpdated !== today) {
            const newStreak = streak + 1;
            setStreak(newStreak);
            localStorage.setItem("duolingoStreak", newStreak);
            localStorage.setItem("duolingoLastUpdated", today);
        }
    }, [streak]);

    return (
        <div className="bg-[#58CC02] text-white font-sans p-6">
            {/* Header */}
            <div className="text-center text-2xl font-bold mb-4">Duolingo</div>
            {/* Languages I Know */}
            <div className="bg-white text-black p-4 rounded-xl shadow-md mb-4">
                <h2 className="text-lg font-semibold mb-2">Languages I know:</h2>
                <ul className="space-y-2">
                    <li><strong>🇩🇪 German:</strong> My native language; I was born & raised in Germany</li>
                    <li><strong>🇬🇧 English:</strong> Studied it in school for 11 years, perfected it through
                        immersion, traveling & international friends - very useful for coding!
                    </li>
                    <li><strong>🏛 Latin:</strong> Studied it in school for 6 years - not my favorite</li>
                    <li><strong>🇪🇸 Spanish:</strong> Started learning it in school for 5 years, spent 2,5 months in
                        South America, then moved to Spain to pursue a degree entirely in Spanish
                    </li>
                    <li><strong>🇵🇱 Polish:</strong> Self-studied it for 2 years during the pandemic, now I use it to
                        consume content in Polish on a daily basis
                    </li>
                    <li><strong>🇵🇹 Portuguese:</strong> Took classes in university for 2 years, picked it up very
                        quickly due to its similarity to Spanish
                    </li>
                </ul>
            </div>
            {/* Languages I'm Learning */}
            <div className="bg-white text-black p-4 rounded-xl shadow-md mb-4">
                <h2 className="text-lg font-semibold mb-2">Languages I'm learning:</h2>
                <ul className="space-y-2">
                    <li><strong>🇷🇺 Russian:</strong> Learned the alphabet during the pandemic, can understand a lot
                        due to its similarity to Polish, now I'm learning it sporadically in my free time
                    </li>
                    <li><strong>🇨🇳 Chinese:</strong> Just started learning it, fascinated by the writing system,
                        seeing it as a new challenge
                    </li>
                </ul>
            </div>
            {/* Streak Section */}
            <div className="bg-white text-black p-4 rounded-xl shadow-md flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">Current Streak:</h2>
                    <p className="text-xl font-bold text-[#FF7900]">🔥 {streak} days</p>
                </div>
                <img
                    src="/src/assets/ipad/duo.png"
                    alt="Duo the Owl"
                    className="w-12 h-12"
                />
            </div>
        </div>
    );
};

export default Duolingo;
