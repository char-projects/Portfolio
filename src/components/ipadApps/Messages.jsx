import { useState } from "react";

const Messages = () => {
    const [messages, setMessages] = useState([
        { sender: "Alice", text: "Hey, how are you?" },
        { sender: "You", text: "I'm good, thanks! You?" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages([...messages, { sender: "You", text: input }]);
            setInput("");
        }
    };

    return (
        <div className="p-6 bg-black h-full">
            <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
            <div className="h-60 overflow-y-auto border p-2 bg-gray-100 rounded-lg">
                {messages.map((msg, index) => (
                    <div key={index} className={`p-2 mb-2 rounded-lg ${msg.sender === "You" ? "bg-blue-400 self-end" : "bg-gray-400"}`}>
                        <strong>{msg.sender}: </strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex mt-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-2 border"
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">Send</button>
            </div>
        </div>
    );
};

export default Messages;
