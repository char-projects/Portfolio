import { useState } from "react";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState("");

    const addNote = () => {
        if (input.trim() !== "") {
            setNotes([...notes, input]);
            setInput("");
        }
    };

    return (
        <div className="p-6 bg-black h-full">
            <h1 className="text-2xl font-bold text-gray-300 mb-4">Notes</h1>
            <div className="h-96 overflow-y-auto border p-2 bg-gray-100 rounded-lg">
                {notes.map((note, index) => (
                    <div key={index} className="p-2 mb-2 bg-yellow-500 rounded-lg">
                        {note}
                    </div>
                ))}
            </div>
            <div className="flex mt-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-2 border"
                    placeholder="Write a note..."
                />
                <button onClick={addNote} className="ml-2 p-2 bg-yellow-500 text-white rounded-lg">Add</button>
            </div>
        </div>
    );
};

export default Notes;
