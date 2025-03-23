import React, { useState } from "react";
import { FiSearch, FiBell, FiUser, FiLayers, FiVideo, FiMessageCircle, FiBriefcase, FiSettings, FiShoppingCart } from "react-icons/fi";
import { olympus, profile_pic } from "../../assets/index.js";

const feedback = [
    { name: "EMURODZO", message: "funny. polite. very organised. proper structure. knows how to write the programs." },
    { name: "SFLYNN", message: "Good evaluation - thank you for taking the time to explain things in such detail! Interesting to see different executions of the same tasks." },
    { name: "EPANNER", message: "everything looked great, done with outstanding rigor! :)" },
    { name: "THBECK", message: "Very organized, code was clean and easy to follow. Answered all questions fantastically and made sure I understood concepts I have not covered yet!" },
    { name: "DAESTREL", message: "lovely evaluation, very helpful and enjoyable to to learn from" },
    { name: "AMAYASSI", message: "Very impressive!! Excellent work, excellent explanations^^" },
    { name: "DMCROY", message: "She was very patient. Fixed her code from previous mistake. Well done." },
    { name: "KHALI", message: "great work and evaluation, taught me a thing or two! :)" },
    { name: "SHALY", message: "Very good team communication and everyone was able to explain the code thoroughly. They all worked together on main parts of the code and were able to explain what they had learned from the project." },
    { name: "VNAZAROV", message: "thank you for the evaluation! showed me how to fix my code :)" },
    { name: "YSINGH", message: "She's literally the funniest and most talented person on the planet" },
    { name: "PABMART2", message: "Chulísimo el proyecto. La verdad es que es una locura que se pueda hacer. Muchas mates y todas bien, y además todo funciona perfectamente. Wow." },
    { name: "SAROCA-F", message: "Un codigo interesante, ha usado ideas que jamás se me habian ocurrido." },
    { name: "BGLASS", message: "super speedy work, exactly what I needed! thank you :)" },
    { name: "SKIRWAN", message: "Great evaluation. Charlotte showed enthusiasm and interest in my work and asked good questions. 10/10 would be evaluated again." },
    { name: "CCUBOS", message: "Brilliant and thorough checks. Fair judgements made throughout with a courteous manner." },
    { name: "AZUBIETA", message: "Charlotte es una gran chica que he conocido hoy, muy amable y trabajadora, con mucho interés. Sigue así guapa :)" }
];

const Intra42Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [marks, setMarks] = useState([
        { project: "Libft", mark: 125 },
        { project: "ft_printf", mark: 100 },
        { project: "get_next_line", mark: 125 },
        { project: "Born2beroot", mark: 125 },
        { project: "Exam Rank 02", mark: 100 },
        { project: "minitalk", mark: 125 },
        { project: "fract-ol", mark: 125 },
        { project: "push_swap", mark: 100 },
        { project: "Exam Rank 03", mark: 100 }
    ]);
    const [currentSelection, setCurrentSelection] = useState("Learner at 42cursus");
    const [selectedOption, setSelectedOption] = useState("Learner at 42cursus"); // Track selected option
    const [level, setLevel] = useState({ number: 3, percentage: 37 });

    const piscineMarks = [
        { project: "C Piscine C00", mark: 70 },
        { project: "C Piscine C01", mark: 100 },
        { project: "C Piscine C02", mark: 85 },
        { project: "C Piscine C03", mark: 100 },
        { project: "C Piscine C04", mark: 50 },
        { project: "C Piscine C05", mark: 80 },
        { project: "C Piscine C06", mark: 70 },
        { project: "C Piscine C07", mark: 60 },
        { project: "C Piscine C08", mark: 100 },
        { project: "C Piscine C09", mark: 100 },
        { project: "C Piscine Rush 00", mark: 120 },
        { project: "C Piscine Rush 01", mark: 100 },
        { project: "C Piscine Shell 00", mark: 60 },
    ];

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleSelection = (selection) => {
        setSelectedOption(selection); // Update selected option
        if (selection === "C Piscine") {
            setMarks(piscineMarks);  // Change marks to Piscine projects
            setLevel({ number: 7, percentage: 78 });
        } else {
            setMarks([
                { project: "Libft", mark: 125 },
                { project: "ft_printf", mark: 100 },
                { project: "get_next_line", mark: 125 },
                { project: "Born2beroot", mark: 125 },
                { project: "Exam Rank 02", mark: 100 },
                { project: "minitalk", mark: 125 },
                { project: "fract-ol", mark: 125 },
                { project: "push_swap", mark: 100 },
                { project: "Exam Rank 03", mark: 100 }
            ]);  // Restore regular marks
            setLevel({ number: 3, percentage: 37 });
        }
        setCurrentSelection(selection);  // Update current selection
        setDropdownOpen(false);  // Close dropdown after selection
    };

    const openModal = () => { setIsModalOpen(true)};
    const closeModal = () => { setIsModalOpen(false)};
    return (
        <>
            <div className="flex bg-[#00CBEC]">
                {/* Sidebar */}
                <aside className="w-14 bg-gray-600 flex flex-col items-center py-6 space-y-10">
                    <img
                        src="/src/assets/ipad/42_Logo.svg"
                        alt="42 Logo"
                        className="h-10 -mb-2"
                    />
                    <FiUser className="text-gray-400 text-2xl" />
                    <FiLayers className="text-gray-400 text-2xl" />
                    <FiVideo className="text-gray-400 text-2xl" />
                    <FiMessageCircle className="text-gray-400 text-2xl" />
                    <FiBriefcase className="text-gray-400 text-2xl" />
                    <FiSettings className="text-gray-400 text-2xl" />
                    <FiShoppingCart className="text-gray-400 text-2xl" />

                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Top Navbar */}
                    <nav className="w-full bg-white shadow-md p-1 flex items-center">
                        <div className="relative w-1/3">
                            <FiSearch className="absolute left-3 top-3 text-gray-700" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-9 pr-4 py-2 bg-white rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center ml-24 gap-3">
                            <FiBell className="text-gray-500 text-xl" />
                            <span className="font-semibold text-sm text-gray-500">cschnath</span>
                        </div>
                    </nav>
                    <div className="px-3 border-b border-black">
                        {/* Profile Section */}
                        <div className="bg-[#197E8F] border border-black shadow-md rounded-lg w-full max-w-3xl mx-auto my-4">
                            <div className="flex flex-row items-center justify-between">
                                <img src={olympus} alt="Olympus" className="w-9 pl-2 h-full rounded-md" />
                                <p className="text-gray-300 text-[11px] bg-gray-800 m-2 p-1 rounded-full">🟡 unavailable</p>
                            </div>
                            <img src={profile_pic} alt="Profile Picture" className="w-24 aspect-square rounded-full mx-auto border-2 border-black object-cover" />
                            <h1 className="text-xl font-bold text-white text-center">Charlotte</h1>
                            <div className="text-white pl-3 pr-4 rounded-lg flex items-center w-full max-w-3xl mx-auto mt-2">
                                <div className="text-white text-4xl font-bold pl-2 py-1 rounded-md">0{level.number}</div>
                                <div className="flex-1 ml-3 relative">
                                    <div className="flex justify-between text-[12px] mb-1">
                                        <span>{level.percentage}%</span>
                                        <span>
                                        <button onClick={toggleDropdown}>
                                            {currentSelection} ▼
                                        </button>
                                            {dropdownOpen && (
                                                <div className="absolute bg-white border shadow-md mt-2 rounded-lg z-10 max-h-36 w-48 right-0">
                                                    <button
                                                        onClick={() => handleSelection("Learner at 42cursus")}
                                                        className="px-4 py-2 text-sm text-gray-700"
                                                    >
                                                        {selectedOption === "Learner at 42cursus" ? "✔ Learner at 42cursus" : "\u00A0\u00A0\u00A0 Learner at 42cursus"}
                                                    </button>
                                                    <button
                                                        onClick={() => handleSelection("C Piscine")}
                                                        className="px-4 py-2 text-sm text-gray-700"
                                                    >
                                                        {selectedOption === "C Piscine" ? "✔ C Piscine" : "\u00A0\u00A0\u00A0 C Piscine"}
                                                    </button>
                                                </div>
                                            )}
                                    </span>
                                    </div>
                                    <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
                                        <div className="bg-black h-full"
                                             style={{ width: selectedOption === "C Piscine" ? "78%" : "37%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <li className="text-white text-[11px] bg-gray-800 mt-1 py-2 px-10 flex justify-between">
                                <span>₳ 80</span> <span>Rank 63</span> <span>Score 5.9k</span> <span>Ev.P 3</span>
                            </li>
                        </div>
                    </div>
                    <div className="bg-gray-200 px-4 pb-2">
                        {/* Project Marks */}
                        <div className="bg-white rounded-lg shadow-md p-5 w-full mt-2">
                            <h2 className="text-lg font-semibold text-black">MARKS</h2>
                            <ul className="mt-3 text-black text-sm space-y-2">
                                {marks.map((item, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{item.project}</span>
                                        <span>
                                            ✅ {item.mark >= 100 ? item.mark : `\u00A0${item.mark}`}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Current Projects */}
                        <div className="bg-white shadow-md rounded-lg p-5 w-full mx-auto mt-3">
                            <div className="flex justify-between">
                                <span><h2 className="text-lg font-semibold text-black">PROJECTS</h2></span>
                                <span
                                    onClick={openModal}
                                    className="cursor-pointer text-[#00CBEC] text-[12px] border border-[#00CBEC] p-1"
                                >
                                    FEEDBACK LOGS
                                </span>
                            </div>
                            <ul className="mt-3 text-black text-sm space-y-2">
                                <li>minishell</li>
                                <li>Philosophers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal for Feedback */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-full p-2 rounded-lg shadow-lg relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-2xl text-gray-600"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl text-gray-700 mb-4">Feedback Log</h3>
                        <div className="space-y-1 text-[12px] max-h-[530px] overflow-y-auto">
                            {feedback.map((item, index) => (
                                <div key={index} className="p-3 bg-gray-500 rounded-md">
                                    <strong>{item.name}:</strong>
                                    <p>{item.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Intra42Home;