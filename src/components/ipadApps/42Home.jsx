import holyGraphImage from "../../assets/ipad/holygraph.png";

const user = {
    name: "Charlotte",
    level: 8.5,
    campus: "42 Málaga",
    avatar: "https://cdn.intra.42.fr/users/cschnath.jpg",
    progress: 85,
    xpData: [
        { week: "Week 1", xp: 10 },
        { week: "Week 2", xp: 20 },
        { week: "Week 3", xp: 35 },
        { week: "Week 4", xp: 50 },
        { week: "Week 5", xp: 65 },
        { week: "Week 6", xp: 85 },
    ],
};

const HolyGraph = () => (
    <div>
        <h2>42 Holy Graph</h2>
        <img src={holyGraphImage} alt="42 Holy Graph" style={{ width: '100%', height: 'auto' }} />
    </div>
);

export default function Intra42() {
    return (
        <div className="bg-[#181818] text-white min-h-screen p-8 font-sans flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 text-[#00BABC]">42 Intra</h1>

            {/* Profile Section */}
            <div className="bg-[#0d0d0d] border border-[#333] rounded-lg p-6 w-full max-w-lg flex items-center gap-4">
                <img className="w-20 h-20 rounded-full border-2 border-[#00BABC]" src={user.avatar} alt={user.name} />
                <div>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <p className="text-gray-400">{user.campus}</p>
                    <p className="text-[#00BABC] font-semibold">Level {user.level}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-[#00BABC] h-2 rounded-full" style={{ width: `${user.progress}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Holy Graph */}
            <div>
                <HolyGraph />
            </div>
        </div>
    );
}