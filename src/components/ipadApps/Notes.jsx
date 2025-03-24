import React, { useState } from "react";
import { Search, Mic } from "lucide-react";
import {aa, attach_note, compose, draw, noteslist, notestable, share, yellowtabs} from "../../assets/index.js";

const Notes = () => {
    const [selectedNote, setSelectedNote] = useState(1);
    const [showOverview, setShowOverview] = useState(true);

    const notes = [
        {
            id: 1, title: "Debugging",
            content: "1. Accept that your code is wrong\n2. Read the error message\n3. Print statements everywhere\n4. Explain your code to someone who doesn't care\n5. Use breakpoints\n6. Go for a walk\n7. Ask for help\n8. Find out it was just a typo\n9. Accept that sometimes, the problem is you\n10. Celebrate your victory\n11. Break something else (accidentally)"
        },
        {
            id: 2, title: "Programming Wishlist",
            content: "- Learn Java\n- Build a 3D game\n- Make a website with TypeScript\n- Start a project using Node.js for the backend\n- Learn more about servers"
        },
        {
            id: 3, title: "Solving a crime in SQL",
            content: "Fiftyville Case (CS50)\n" +
                "- Execute .schema to see tables in database\n" +
                "- SELECT crime scene reports that match date and location\n" +
                "- Use interviews to find leads — look for mentions of transactions, travel, or calls\n" +
                "- Check atm_transactions for withdrawals and bank account numbers\n" +
                "- Use security_logs to see which cars were there\n" +
                "- Find owners via people (match license plates)\n" +
                "- Check flights, passport numbers and phone numbers\n" +
                "- Cross-check passengers with suspects from ATM and car data\n" +
                "- Use phone_calls to find short calls between suspects\n" +
                "- Accomplice should be in security_logs but not on the flight"
        },
        {
            id: 4, title: "Bucket List",
            content: "- Curaçao\n- Salar de Uyuni, Bolivia\n- Sri Lanka\n- Angkor Wat, Cambodia\n- Mozambique\n- Petra, Jordan\n- Cyprus\n- Bocas del Toro, Panama\n- Tahiti\n- Tajikistan\n- Lapland, Finland\n- Fiji\n- Sahara Desert, Algeria\n"
        },
    ];

    const currentNote = notes.find((note) => note.id === selectedNote);

    return (
        <div className="h-full bg-black flex flex-col relative">
            {showOverview && (
                // Notes Overview
                <div className="w-7/12 h-full py-3 pr-3 pl-2 absolute top-0 left-0 bg-[#201F1F]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                            <p className="text-5xl text-[#fbbc04] mb-2">&lt;</p>
                            <p className="text-lg mt-2 text-[#fbbc04]">Folders</p>
                        </div>
                        <div className="w-6 h-6 mr-2 border-2 border-[#fbbc04] text-[#fbbc04] flex items-center justify-center rounded-full text-xl font-bold relative -top-1">
                            <span className="text-lg font-bold leading-none" style={{ transform: "translateY(-3px)" }}>...</span>
                        </div>
                    </div>
                    <div className="pl-2">
                        <h1 className="text-4xl font-semibold mb-5">Notes</h1>
                        <div className="flex bg-[#3E3D3D] justify-between rounded-lg mb-7 p-2">
                            <button className="text-lg text-gray-300 flex items-center gap-2">
                                <Search size={20} />
                                Search
                            </button>
                            <button>
                                <Mic size={20} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className={`p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer ${
                                        note.id === selectedNote ? "bg-[#3E3D3D]" : "bg-[#1C1C1E]"
                                    }`}
                                    onClick={() => {
                                        setSelectedNote(note.id);
                                        setShowOverview(false);
                                    }}                                >
                                    <h2 className="text-lg font-medium">{note.title}</h2>
                                    <p className="text-sm text-gray-500">{note.content.split("\n")[0]}...</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row pt-52 items-center justify-between">
                            <p></p>
                            <p className="text-[12px]">{notes.length} Notes</p>
                            <button
                                className="w-7 h-7 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
                            >
                                <img src={compose} alt="Compose" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Note View */}
            <div className="w-full h-screen flex flex-col p-6">
                <div className="flex mt-6 justify-between items-center">
                    <button onClick={() => setShowOverview(true)} className="text-lg">
                        <img
                            src={yellowtabs}
                            alt="Tab Bar"
                            className="w-7 h-auto"
                        />
                    </button>
                    <div className="flex space-x-8 justify-between items-center">
                        <button className="w-5 h-auto">
                            <img src={share} alt="Share" />
                        </button>
                        <button className="w-6 h-auto">
                            <img src={draw} alt="Draw" />
                        </button>
                        <button className="w-5 h-5 border-2 border-[#fbbc04] text-[#fbbc04] flex items-center justify-center rounded-full text-xl font-bold relative">
                            <span className="text-lg font-bold leading-none" style={{ transform: "translateY(-3px)" }}>...</span>
                        </button>
                        <button
                            className="w-6 h-6 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
                        >
                            <img src={compose} alt="Compose" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                    <div className="flex-grow">
                        <h1 className="text-2xl pt-8 font-semibold">{currentNote.title}</h1>
                        <p className="text-lg whitespace-pre-wrap mt-2">{currentNote.content}</p>
                    </div>
                    <div className="px-28 flex flex-row items-center justify-between">
                        <img
                            src={aa}
                            alt="Aa"
                            className="w-7 h-auto"
                        >
                        </img>
                        <img
                            src={noteslist}
                            alt="List"
                            className="w-[70px] h-auto"
                        />
                        <img
                            src={notestable}
                            alt="Table"
                            className="w-8 h-6"
                        />
                        <img
                            src={attach_note}
                            alt="Attach"
                            className="w-10 h-auto pl-4"
                        >
                        </img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;
